import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { Inter, IBM_Plex_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import { Header } from '@/components/header/index';
import { Footer } from '@/components/footer';
import { ButtonGoToTop } from '@/components/button-go-to-top';
import { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import ToastProvider from '@/components/toast-provider';

export const metadata: Metadata = {
  title: '<llemosv />',
  description:
    'Welcome to Leonardo Lemos portfolio. Happy coding and have a nice day',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <ToastProvider>
          <ButtonGoToTop />
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
