'use client';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
interface FilterSelectProps {
  onValueChange: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const handleSelectChange = (value: string) => {
    setSelectedValue(value); // 선택한 값을 업데이트
    if (onValueChange) {
      onValueChange(value);
    }
  };
  return (
    <Select value={selectedValue} onValueChange={handleSelectChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='전체' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='전체'>전체</SelectItem>
        <SelectItem value='콘서트'>콘서트</SelectItem>
        <SelectItem value='클래식'>클래식</SelectItem>
        <SelectItem value='기타'>기타</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default FilterSelect;
