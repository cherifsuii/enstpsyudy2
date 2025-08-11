import fs from 'fs';
import path from 'path';

const AboutPage = () => {
  const resourcesDir = path.join(process.cwd(), 'resources');
  const infoabtschoolPath = path.join(resourcesDir, 'infoabtschool.txt');
  const info2Path = path.join(resourcesDir, 'info2.txt');

  let infoabtschoolContent = '';
  let info2Content = '';

  try {
    infoabtschoolContent = fs.readFileSync(infoabtschoolPath, 'utf-8');
    info2Content = fs.readFileSync(info2Path, 'utf-8');
  } catch (error) {
    console.error("Could not read about page content.", error);
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center">About ENSTP</h1>

      <section className="mb-12" dir="rtl">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Introduction to ENSTP</h2>
        <div className="prose max-w-none text-right">
          {infoabtschoolContent.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section dir="rtl">
        <h2 className="text-3xl font-bold mb-4 text-orange-500">History of ENSTP</h2>
        <div className="prose max-w-none text-right">
          {info2Content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
