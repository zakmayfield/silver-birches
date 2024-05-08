import './globals.css';
import type { Metadata } from 'next';
import { PageLayout } from '@/shared/layouts';
import { quicksand } from '@/shared/fonts';
import { Footer, Navbar } from '@/shared/components';
import { AppHeader } from '@/features/app-header';

export const metadata: Metadata = {
  title: 'Silver Birches Resort',
  description: 'Silver Birches Resort, Manitoulin Island',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} px-24`}>
        <AppHeader />
        <PageLayout>{children}</PageLayout>
        <Footer />
      </body>
    </html>
  );
}
