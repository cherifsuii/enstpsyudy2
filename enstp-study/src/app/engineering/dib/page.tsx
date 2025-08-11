import Link from 'next/link';

export default function DIBPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DIB - Basic Infrastructures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/engineering/dib/1st-year" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">1st Year</h2>
          <p className="text-gray-600">Resources for the first year of the DIB department.</p>
        </Link>
        {/* The user provided a file for 2nd year DIB, so I'll add a card for it */}
        <Link href="/engineering/dib/2nd-year" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">2nd Year</h2>
          <p className="text-gray-600">Resources for the second year of the DIB department.</p>
        </Link>
      </div>
    </div>
  );
}
