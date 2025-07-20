// pages/_app.tsx
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css"; // Ensure you have a globals.css for Tailwind directives
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}