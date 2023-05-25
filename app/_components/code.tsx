import CodeView from './code-view';
import * as fs from 'fs';
import * as path from 'path';

export default async function CodePanel() {
  const pathes = ['/app/layout.tsx'];

  const codes = await Promise.all(
    pathes.map((filePath) => {
      const jsonPath = path.join(process.cwd(), filePath);
      return fs.readFileSync(jsonPath, 'utf8');
    })
  );

  const sources = pathes.reduce((acc, path, index) => {
    acc[path] = codes[index];
    return acc;
  }, {} as { [key in string]: string });

  return <CodeView sources={sources} />;
}
