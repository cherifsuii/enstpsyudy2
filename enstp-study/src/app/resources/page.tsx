import { getParsedData, Subject } from '../../lib/parser';
import Link from 'next/link';

const ResourceSection = ({ title, subjects }: { title: string, subjects: Subject[] }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {subjects.map((subject, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">{subject.name}</h3>
          <ul className="space-y-2">
            {subject.resources.map((resource, rIndex) => (
              <li key={rIndex}>
                <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {resource.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default function ResourcesPage() {
  const allData = getParsedData();

  const competitionPrep = allData['2eme_annee_concours'] || [];
  const advancedFormations = allData['des_formations_pour_les_3eme_annee_dms_et_dib'] || [];
  const techLibrary = [
    ...(allData['qanun_alsafaqat_aljazayirii'] || []),
    ...(allData['mustalahat_alashghal_aleumumiat_walbina'] || [])
  ];
  const otherSchools = allData['1er_annee_preparatoire_ultimate_packs_from_other_schools'] || [];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Resources & Competitions</h1>

      {competitionPrep.length > 0 && (
        <ResourceSection title="Competition Preparation" subjects={competitionPrep} />
      )}
      {advancedFormations.length > 0 && (
        <ResourceSection title="Advanced Formations" subjects={advancedFormations} />
      )}
      {techLibrary.length > 0 && (
        <ResourceSection title="Technical & Legal Library" subjects={techLibrary} />
      )}
      {otherSchools.length > 0 && (
        <ResourceSection title="Resources from Other Schools" subjects={otherSchools} />
      )}
    </div>
  );
}
