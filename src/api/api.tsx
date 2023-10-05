import xml2js from 'xml2js';

import { ApiRes, ApiType } from './types';
const fetchApi = async (): Promise<ApiType[]> => {
  const url = process.env.API_URL as string;
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.text();

  const parser = new xml2js.Parser();
  const apis: ApiRes = await new Promise((resolve, reject): void => {
    parser.parseString(data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

  return apis.culturalEventInfo.row;
};
export default fetchApi;
