import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import FloatingSocials from '@/components/site/FloatingSocials';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'AnnexSoft Digital Hub',
  description: 'Your partner in digital innovation, providing top-tier IT services and solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased')}>
        {children}
        <Toaster />
        <FloatingSocials />
      </body>
    </html>
  );
}
