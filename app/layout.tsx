import AuthProvider from 'context/AuthProvider';
import Footer from 'comp/Footer';
import Nav from 'comp/Nav';
import { Montserrat, Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import TopWrapper from 'util/TopWrapper';
import './globals.css';
import Analytics from 'util/Analytics';

type Props = {
  children?: ReactNode;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-pry-400 scrollbar-track-slate-200"
    >
      <Analytics />
      <body
        className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <AuthProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Nav />
          <TopWrapper>
            {children}
            <div id="mainModalContainer" />
          </TopWrapper>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
