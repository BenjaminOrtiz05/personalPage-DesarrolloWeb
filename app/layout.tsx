import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Tu Nombre - Profesión',
  description: 'Breve descripción personal',
  keywords: ['portfolio', 'desarrollador', 'diseñador', 'tu profesión'],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}