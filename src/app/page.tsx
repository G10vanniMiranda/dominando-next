import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dominando Next JS",
  description: "Dominando Next JS completo do zero",
  openGraph: {
    title: "Dominando Next JS",
    description: "Dominando Next JS completo do zero",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-6xl">Home</h1>
    </div>
  );
}