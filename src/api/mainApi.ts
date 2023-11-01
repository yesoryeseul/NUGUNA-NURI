import xml2js from 'xml2js';

import { IApiRes, IApiType } from '@/types';

const mainApi = async (startIndex: number, endIndex: number): Promise<IApiType[]> => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `http://openapi.seoul.go.kr:8088/${apiKey}/xml/culturalEventInfo/${startIndex}/${endIndex}/`;
  const res = await fetch(url);
  const data = await res.text();

  const parser = new xml2js.Parser();
  const apis: IApiRes = await new Promise((resolve, reject): void => {
    parser.parseString(data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });

  return apis.culturalEventInfo.row;
};
export default mainApi;
