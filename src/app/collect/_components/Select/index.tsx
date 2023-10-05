import { useAtom } from 'jotai';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { selectValueAtom } from '@/types/collect/atom';
interface FilterSelectProps {
  onValueChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useAtom(selectValueAtom);
  const handleSelectChange = (value: string) => {
    setSelectedValue(value); // 선택한 값을 업데이트
    if (onValueChange) {
      onValueChange(value);
    }
  };
  return (
    <div className='mb-3 px-4 w-full flex justify-end'>
      <Select value={selectedValue} onValueChange={handleSelectChange}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='전체' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='전체'>전체</SelectItem>
          <SelectItem value='교육/체험'>교육/체험</SelectItem>
          <SelectItem value='국악'>국악</SelectItem>
          <SelectItem value='독주/독창회'>독주/독창회</SelectItem>
          <SelectItem value='무용'>무용</SelectItem>
          <SelectItem value='뮤지컬/오페라'>뮤지컬/오페라</SelectItem>
          <SelectItem value='연극'>연극</SelectItem>
          <SelectItem value='영화'>영화</SelectItem>
          <SelectItem value='전시/미술'>전시/미술</SelectItem>
          <SelectItem value='콘서트'>콘서트</SelectItem>
          <SelectItem value='클래식'>클래식</SelectItem>
          <SelectItem value='축제-문화/예술'>축제-문화/예술</SelectItem>
          <SelectItem value='축제-시민화합'>축제-시민화합</SelectItem>
          <SelectItem value='축제-자연/경관'>축제-자연/경관</SelectItem>
          <SelectItem value='축제-전통/역사'>축제-전통/역사</SelectItem>
          <SelectItem value='축제-기타'>축제-기타</SelectItem>
          <SelectItem value='기타'>기타</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
export default FilterSelect;
