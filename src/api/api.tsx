import xml2js from 'xml2js';

import { ApiType, CulturalEventInfo } from './types';
const fetchApi = async () => {
  const url = process.env.API_URL;
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.text();

  const parser = new xml2js.Parser();
  const apis: CulturalEventInfo = await new Promise((resolve, reject): void => {
    parser.parseString(data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
  // console.log(apis);
  const arr: ApiType = apis.culturalEventInfo.row;

  return arr;
};
export default fetchApi;

// const api = await fetchApi();
