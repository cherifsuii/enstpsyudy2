import { getParsedData, Subject } from '../../../../lib/parser';
import Link from 'next/link';

const SubjectCard = ({ subject }: { subject: Subject }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-4 text-orange-500">{subject.name}</h3>
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

export default function DMSFirstYearPage() {
  const allData = getParsedData();
  const semester1 = allData['1ere_annee_dms_semestre_1'] || [];
  const semester2 = allData['1ere_annee_dms_semestre_2'] || [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DMS - 1st Year</h1>

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
