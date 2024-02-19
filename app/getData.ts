// utils/getData.ts
import fs from 'fs';

export const getData = async () => {
  const jsonData = await fs.promises.readFile('db.json', 'utf8'); // db.json dosyasıyla aynı dizinde olduğunu varsayıyoruz
  const data = JSON.parse(jsonData);
  return data;
};
