import Link from 'next/link';

export default function DMSPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DMS - Materials & Structures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/engineering/dms/1st-year" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">1st Year</h2>
          <p className="text-gray-600">Resources for the first year of the DMS department.</p>
        </Link>
        {/* The user also provided a file for 2nd year DMS, so I'll add a card for it */}
        <div className="block p-8 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-500 mb-2">2nd Year</h2>
          <p className="text-gray-500">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
