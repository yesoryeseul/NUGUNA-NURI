import Image from 'next/image';
import Link from 'next/link';

import type { ICulturalEventRow } from '@/types';

export const OneCollectItem = ({
  item,
  idx,
  selectedValue,
}: {
  item: ICulturalEventRow;
  idx: number;
  selectedValue: string;
}) => {
  const { MAIN_IMG, ORG_NAME, TITLE } = item;
  const url = `/collect/${idx}/${selectedValue}`;
  return (
    <Link href={url}>
      <Image
        src={MAIN_IMG}
        width={400}
        height={562}
        alt={TITLE}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
      />
      <div className='flex flex-col items-center my-4'>
        <p className='text-lg text-gray-500'>{ORG_NAME}</p>
        <p className='text-xl font-bold text-gray-900 mt-2'>{TITLE}</p>
      </div>
    </Link>
  );
};
