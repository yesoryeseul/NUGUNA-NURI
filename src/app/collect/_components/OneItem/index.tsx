'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { CulturalEventRow } from '../../page';

const OneItem = ({ item, idx }: { item: CulturalEventRow; idx: number }) => {
  const { MAIN_IMG, ORG_NAME, TITLE } = item;
  const router = useRouter();
  const handleItemClick = () => {
    console.log(idx);
    router.push(`/collect/${idx}`);
  };
  return (
    <div onClick={handleItemClick} style={{ cursor: 'pointer' }}>
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
    </div>
  );
};

export default OneItem;
