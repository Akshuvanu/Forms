import fs from 'fs';
import path from 'path';

const dbPath = path.resolve(__dirname, '../../db.json');

export const readDatabase = (): any[] => {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
}

export const writeDatabase = (data: any[]): void => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
}
