import '@/app/_styles/globals.css';
import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import { TaskProvider } from './_contexts/TaskContext';

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
        <Header />
        <div className="flex-1  grid">
          <main className="max-w-7xl mx-auto w-full">
            <TaskProvider>{children}</TaskProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
