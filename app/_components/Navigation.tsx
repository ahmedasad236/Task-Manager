import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="text-xl">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-16 items-center p-6">
        <li>
          <Link
            href="/"
            className="hover:text-accent-400 transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/tasks"
            className="hover:text-accent-400 transition-colors"
          >
            My tasks
          </Link>
        </li>
        <li>
          <Link
            href="/tasks/new"
            className="hover:text-accent-400 transition-colors"
          >
            Add task
          </Link>
        </li>
      </ul>
    </nav>
  );
}
