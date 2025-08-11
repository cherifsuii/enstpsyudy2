import { NextResponse } from 'next/server';
import { getParsedData, Subject } from '../../../lib/parser';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const allData = getParsedData();
  const searchResults: any[] = [];

  const lowerCaseQuery = query.toLowerCase();

  for (const fileName in allData) {
    const subjects = allData[fileName];
    subjects.forEach((subject: Subject) => {
      subject.resources.forEach(resource => {
        const searchableText = `${subject.name} ${resource.label}`.toLowerCase();
        if (searchableText.includes(lowerCaseQuery)) {
          searchResults.push({
            ...resource,
            subject: subject.name,
            breadcrumb: fileName.replace(/_/g, ' '), // Simple breadcrumb for now
          });
        }
      });
    });
  }

  return NextResponse.json(searchResults);
}
