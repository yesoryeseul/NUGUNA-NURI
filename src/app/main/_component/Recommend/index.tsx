import fetchApi from '@/api/api';
import { ApiType } from '@/api/types';

export default async function RecmmendSlide() {
  const api: ApiType[] = await fetchApi();
  const recommendImg = api.filter((v: ApiType) => v.IS_FREE[0] == '무료');

  return (
    <>
      <div className='flex'>
        {recommendImg.map((v: ApiType) => (
          <div className='w-1/3' key={v.CODENAME[0]}>
            <img src={v.MAIN_IMG[0]} className='w-72' alt='My Image'></img>
          </div>
        ))}
      </div>
    </>
  );
}
