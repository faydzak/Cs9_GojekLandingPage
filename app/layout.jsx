import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gofast | Your everyday needs, sorted fast.',
  description: 'From rides and food delivery to logistics and payments. Gofast is the only app you need to navigate your day with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
