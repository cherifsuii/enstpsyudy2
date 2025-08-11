import fs from 'fs';
import path from 'path';

export interface ResourceLink {
  label: string;
  url: string;
}

export interface Subject {
  name: string;
  resources: ResourceLink[];
  notes?: string;
}

export interface Semester {
  name: string;
  subjects: Subject[];
}

export interface Year {
  name: string;
  semesters: Semester[];
}

export interface Department {
  name: string;
  years: Year[];
}

export interface Cycle {
  name: string;
  years?: Year[];
  departments?: Department[];
  resources?: ResourceLink[];
}

function parseResourceContent(content: string): Subject[] {
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);
  const subjects: Subject[] = [];
  let currentSubject: Subject | null = null;
  let currentCategory: string | null = null;
  let lastLine = '';

  for (const line of lines) {
    const isLink = line.startsWith('http');

    if (isLink) {
      if (currentSubject) {
        const urls = line.split(',').map(l => l.trim()).filter(l => l.startsWith('http'));
        urls.forEach(url => {
          let label = lastLine.replace(url, '').trim();
          if (!label || label.startsWith('http')) {
            label = currentCategory || 'Link';
          }
          currentSubject.resources.push({ label, url });
        });
      }
    } else {
      const isSubjectCandidate = /^[a-zA-Z\s0-9&]+$/.test(line) && line.toUpperCase() === line && line.length > 3;
      const isCategory = /^(cours|td|exo|exam|resumes|tps|intiro|ultimate pack|pack|les cours|td and examen|td et solutions)/i.test(line);

      if (isSubjectCandidate && !isCategory) {
        if (currentSubject) {
          subjects.push(currentSubject);
        }
        currentSubject = { name: line, resources: [] };
        currentCategory = null;
      } else if (isCategory) {
        currentCategory = line;
      }
    }
    lastLine = line;
  }

  if (currentSubject) {
    subjects.push(currentSubject);
  }

  return subjects;
}

export function getParsedData(): Record<string, Subject[]> {
  const resourcesDir = path.join(process.cwd(), 'resources');
  const allData: Record<string, Subject[]> = {};

  try {
    const files = fs.readdirSync(resourcesDir);

    files.forEach(file => {
      const filePath = path.join(resourcesDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const parsedData = parseResourceContent(content);
      const fileName = file.replace('.txt', '');
      allData[fileName] = parsedData;
    });
  } catch (error) {
    console.error("Could not read or parse resource files.", error);
    return {};
  }

  return allData;
}
