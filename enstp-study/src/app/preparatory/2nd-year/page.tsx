import { getParsedData, Subject } from '../../../lib/parser';
import Link from 'next/link';

const SubjectCard = ({ subject }: { subject: Subject }) => {
  const isBerroudji = subject.name.toLowerCase().includes('berroudji') ||
                      subject.resources.some(r => r.label.toLowerCase().includes('berroudji'));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-orange-500">{subject.name}</h3>
        {isBerroudji && (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            Mr. Berroudji
          </span>
        )}
      </div>
      <ul className="space-y-2">
        {subject.resources.map((resource, index) => (
          <li key={index}>
            <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {resource.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SecondYearPage() {
  const allData = getParsedData();
  const semester1 = allData['2eme_annee_1er_semestre'] || [];
  const semester2 = allData['2eme_annee_2eme_semestre'] || [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Preparatory Cycle - 2nd Year</h1>

      <section>
        <h2 className="text-3xl font-bold mb-6">Semester 1</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semester1.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Semester 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semester2.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </section>
    </div>
  );
}
