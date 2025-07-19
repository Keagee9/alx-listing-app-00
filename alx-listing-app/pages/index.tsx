// pages/index.tsx
import Image from "next/image";
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE, FILTER_LABELS } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Pill from "@/components/Pill"; // Import the Pill component
import { useState } from "react"; // For filter state if needed later

// A simple Property Card component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{property.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{property.address.city}, {property.address.country}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${property.price.toLocaleString()}</span>
          <div className="flex items-center text-yellow-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-gray-700 text-sm">{property.rating.toFixed(2)}</span>
          </div>
        </div>
        {property.discount && (
          <p className="text-sm text-red-500 mt-1">Discount: {property.discount}%</p>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (label: string) => {
    setActiveFilter(label === activeFilter ? null : label);
    // In a real application, you would filter PROPERTYLISTINGSAMPLE here
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-3">
          {FILTER_LABELS.map((label) => (
            <Pill
              key={label}
              label={label}
              isActive={activeFilter === label}
              onClick={() => handleFilterClick(label)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Explore Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}