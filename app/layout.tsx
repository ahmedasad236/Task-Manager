import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: {
    template: '%s | Taskati',
    default: 'Welcome | Taskati'
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-50 min-h-screen flex flex-col relative`}
      >
        {children}
      </body>
    </html>
  );
}
