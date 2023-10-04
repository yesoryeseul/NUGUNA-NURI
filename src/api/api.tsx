import xml2js from 'xml2js';

import { CulturalEventInfo } from './types';
const fetchApi = async () => {
  const url =
    'http://openapi.seoul.go.kr:8088/624e504e6c70687335324976584446/xml/culturalEventInfo/1/5/';
  const res = await fetch(url, { cache: 'no-store' });
  const data = await res.text();

  const parser = new xml2js.Parser();
  const apis: CulturalEventInfo = await new Promise((resolve, reject): void => {
    parser.parseString(data, (err, result) => {
      if (err) reject(err);
      else resolve(result as CulturalEventInfo);
    });
  });
  console.log(apis);
  const arr = apis.culturalEventInfo.RESULT;
  return arr;
};
export default fetchApi;

// const api = await fetchApi();
