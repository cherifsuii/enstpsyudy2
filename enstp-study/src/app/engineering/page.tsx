import Link from 'next/link';

export default function EngineeringPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Engineering Cycle</h1>
      <p className="text-lg text-center mb-12">Please select your department to continue.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/engineering/dib" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">DIB - Basic Infrastructures</h2>
          <p className="text-gray-600">Department of Basic Infrastructures.</p>
        </Link>
        <Link href="/engineering/dms" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-orange-500 mb-2">DMS - Materials & Structures</h2>
          <p className="text-gray-600">Department of Materials and Structures.</p>
        </Link>
      </div>
    </div>
  );
}
