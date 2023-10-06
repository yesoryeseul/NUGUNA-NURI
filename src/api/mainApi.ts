import xml2js from 'xml2js';

import { ApiRes, ApiType } from './types';
const mainApi = async (startIndex: number, endIndex: number): Promise<ApiType[]> => {
  const apiKey = process.env.MAIN_API_KEY;
  const url = `http://openapi.seoul.go.kr:8088/${apiKey}/xml/culturalEventInfo/${startIndex}/${endIndex}/`;
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
export default mainApi;
