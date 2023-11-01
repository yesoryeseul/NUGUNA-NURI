import { useAtom } from 'jotai';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FilterOptions } from '@/consts';
import { selectValueAtom } from '@/store';
import type { IFilterSelectProps } from '@/types';

export const FilterSelect: React.FC<IFilterSelectProps> = ({ onValueChange }) => {
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
          {FilterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
