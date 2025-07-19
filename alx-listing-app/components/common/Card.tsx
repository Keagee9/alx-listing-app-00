import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <div className="border rounded shadow p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">${price} / night</p>
    </div>
  );
};

export default Card;
