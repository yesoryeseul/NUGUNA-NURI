export interface IFilterSelectProps {
  onValueChange: (value: string) => void;
}

export interface ICulturalEventRow {
  MAIN_IMG: string;
  ORG_NAME: string;
  TITLE: string;
  CODENAME: string;
}

export interface ICulturalEventInfoProps {
  list_total_count: number;
  culturalEventInfo: {
    row: ICulturalEventRow[];
  };
}
