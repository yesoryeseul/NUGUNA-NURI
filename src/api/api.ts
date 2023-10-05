import xml2js from 'xml2js';

import { ApiRes, ApiType } from './types';
const fetchApi = async (): Promise<ApiType[]> => {
  const url =
    'http://openapi.seoul.go.kr:8088/624e504e6c70687335324976584446/xml/culturalEventInfo/1/50/';
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
