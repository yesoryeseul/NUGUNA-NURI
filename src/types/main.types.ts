export interface IApiType {
  CODENAME: string[];
  GUNAME: string[];
  TITLE: string[];
  DATE: string[];
  PLACE: string[];
  ORG_NAME: string[];
  USE_TRGT: string[];
  USE_FEE: string[];
  PLAYER: string[];
  PROGRAM: string[];
  ETC_DESC: string[];
  ORG_LINK: string[];
  MAIN_IMG: string[];
  RGSTDATE: string[];
  TICKET: string[];
  STRTDATE: string[];
  END_DATE: string[];
  THEMECODE: string[];
  LOT: string[];
  LAT: string[];
  IS_FREE: string[];
  HMPG_ADDR: string[];
}

export interface IResultObject {
  CODE: string;
  MESSAGE: string;
}

export interface ICulturalEventInfo {
  list_total_count: string[];
  RESULT: IResultObject[];
  row: IApiType[];
}

export interface IApiRes {
  culturalEventInfo: ICulturalEventInfo;
}
