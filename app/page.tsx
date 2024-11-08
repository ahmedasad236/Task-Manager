import Image from 'next/image';
import Link from 'next/link';
import HomeImage from '@/public/home.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <Image
        src={HomeImage}
        alt="Floating"
        className="w-48 h-48 mb-4 rounded-full animate-float"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      />

      <h1 className="text-6xl text-primary-50 mb-10 tracking-tight font-normal">
        Welcome to Taskati 👋
      </h1>

      <Link
        href="/tasks/new"
        className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
      >
        Start Exploring Tasks
      </Link>
    </div>
  );
}
