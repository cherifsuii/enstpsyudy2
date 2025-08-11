import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resourcesDir = path.resolve(__dirname, '..', 'resources');
const outputDir = path.resolve(__dirname, '..', 'src', 'lib');
const outputPath = path.join(outputDir, 'data.json');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function parseFile(content) {
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);
  const subjects = [];
  let currentSubject = null;
  let currentCategory = null;
  let currentLanguage = null;
  let lastLine = '';

  for (const line of lines) {
    const isLink = line.startsWith('http');

    if (isLink) {
        if (currentSubject) {
            const urls = line.split(',').map(l => l.trim()).filter(l => l.startsWith('http'));
            urls.forEach(url => {
                let label = lastLine.replace(url, '').trim();
                if(!label || label.startsWith('http')) {
                    label = currentCategory || 'Link';
                }
                if (currentLanguage) {
                    label += ` (${currentLanguage})`;
                }
                currentSubject.resources.push({ label: label, url });
            });
        }
    } else {
        const isSubject = /^[a-zA-Z\s0-9&]+$/.test(line) && line.toUpperCase() === line && line.length > 3;
        const isCategory = /^(cours|td|exo|exam|resumes|tps|intiro|ultimate pack|pack|les cours|td and examen|td et solutions)/i.test(line);
        const isLanguage = /(in english|en francais|en english)/i.test(line);

        if (isSubject && !isCategory) {
            if (currentSubject) {
                subjects.push(currentSubject);
            }
            currentSubject = { name: line, resources: [] };
            currentCategory = null;
            currentLanguage = null;
        } else if (isCategory) {
            currentCategory = line;
            currentLanguage = null;
        } else if (isLanguage) {
            currentLanguage = line;
        }
    }
    lastLine = line;
  }

  if (currentSubject) {
    subjects.push(currentSubject);
  }

  return subjects;
}


const allData = {};

const files = fs.readdirSync(resourcesDir);

files.forEach(file => {
  const filePath = path.join(resourcesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const parsedData = parseFile(content);

  const fileName = file.replace('.txt', '');
  allData[fileName] = parsedData;
});

fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));

console.log(`Data parsed and saved to ${outputPath}`);
