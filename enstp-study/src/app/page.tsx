import Link from 'next/link';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-gray-200 flex items-center justify-center"
        style={{
          // I will use a placeholder color for the banner.
          // In a real scenario, this would be `url(/banner.jpg)`.
          backgroundColor: '#f0f0f0',
        }}
      >
        <div className="text-center text-white p-6 bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">ENSTP Study</h1>
          <p className="text-xl mb-8">Your one-stop portal for all academic resources at ENSTP.</p>
          <SearchBar />
        </div>
      </div>

      {/* Navigation Cards Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/preparatory" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">Preparatory Cycle</h3>
              <p className="text-gray-600">Resources for the 1st and 2nd year of the preparatory cycle.</p>
            </Link>
            <Link href="/engineering" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">Engineering Cycle</h3>
              <p className="text-gray-600">Courses and materials for DIB and DMS departments.</p>
            </Link>
            <Link href="/resources" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">Resources & Competitions</h3>
              <p className="text-gray-600">Extra resources, competition prep, and more.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
