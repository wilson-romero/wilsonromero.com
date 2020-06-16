import fs from 'fs';
import path from 'path';

const cvDirectory = path.join(process.cwd(), 'data', 'cv');

export function getCVData() {
  const rawData = fs.readFileSync(cvDirectory + '/en.json');
  const cvData = JSON.parse(rawData);
  return cvData;
}
