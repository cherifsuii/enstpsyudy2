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

export default function DIBSecondYearPage() {
  const allData = getParsedData();
  const yearData = allData['2eme_annee_dib_1ere_et_2eme_semestre'] || [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">DIB - 2nd Year</h1>

      <section>
        <h2 className="text-3xl font-bold mb-6">Semesters 1 & 2</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yearData.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </section>
    </div>
  );
}
