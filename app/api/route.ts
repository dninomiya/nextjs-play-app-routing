import { NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const source = searchParams.get('source');

  const jsonPath = path.join(process.cwd(), 'app/@sidebar/default.tsx');
  const code = fs.readFileSync(jsonPath, 'utf8');

  return NextResponse.json({ code: '111' });
}
