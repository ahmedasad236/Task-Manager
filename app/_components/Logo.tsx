import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 z-10"
    >
      <Image
        src={logo}
        quality={100}
        width={80}
        height={80}
        className="rounded-full animate-float"
        alt="The Wild Oasis logo"
      />
      <span className="text-3xl font-semibold text-primary-100">Taskati</span>
    </Link>
  );
}

export default Logo;
