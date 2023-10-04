import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FilterTab = () => {
  return (
    <Tabs defaultValue='all' className='mb-12'>
      <TabsList>
        <TabsTrigger value='all'>전체</TabsTrigger>
        <TabsTrigger value='edu'>교육/체험</TabsTrigger>
        <TabsTrigger value='movie'>영화/연극</TabsTrigger>
        <TabsTrigger value='music'>음악</TabsTrigger>
        <TabsTrigger value='art'>전시/미술</TabsTrigger>
        <TabsTrigger value='festival'>축제</TabsTrigger>
        <TabsTrigger value='etc'>기타</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default FilterTab;
