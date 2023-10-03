import Image from 'next/image';
interface Data {
  MAIN_IMG: string;
  ORG_NAME: string;
  TITLE: string;
}

const OneItem = ({ data }: { data: Data }) => {
  const { MAIN_IMG, ORG_NAME, TITLE } = data;
  return (
    <div>
      <Image src={MAIN_IMG} width={400} height={562} alt='test' />
      <div className='flex flex-col items-center my-4'>
        <p className='text-lg text-gray-500'>{ORG_NAME}</p>
        <p className='text-xl font-bold text-gray-900 mt-2'>{TITLE}</p>
      </div>
    </div>
  );
};

export default OneItem;
