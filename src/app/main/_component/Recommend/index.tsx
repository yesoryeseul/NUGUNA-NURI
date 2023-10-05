import fetchApi from '@/api/api';

export default async function RecmmendSlide() {
  const api = await fetchApi();
  const recommendImg = api.filter((v) => v.IS_FREE == '무료');

  return (
    <>
      <div className='flex'>
        {recommendImg.map((v) => (
          <div className='w-1/3'>
            <img src={v.MAIN_IMG} className='w-72' alt='My Image'></img>
          </div>
        ))}
      </div>
    </>
  );
}
