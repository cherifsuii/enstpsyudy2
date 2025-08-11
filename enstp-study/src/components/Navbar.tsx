import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          ENSTP Study
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/preparatory" className="text-gray-700 hover:text-orange-500">
            Preparatory Cycle
          </Link>
          <Link href="/engineering" className="text-gray-700 hover:text-orange-500">
            Engineering Cycle
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-orange-500">
            Resources
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
