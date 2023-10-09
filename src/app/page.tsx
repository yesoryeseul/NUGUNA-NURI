import MainBlog from './main/_component/Blog';
import EventFeed from './main/_component/EventFeed';
import MainBanner from './main/_component/MainbannerSlide';
import RecmmendSlide from './main/_component/RecommendProgram';

export default function Home() {
  return (
    <div className='flex-col align-center'>
      <MainBanner />
      <div className='text-center my-24	'>
        <h2 className='scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
          &quot;누구나 누리&quot;
        </h2>
        <div className='mt-1.5 text-gray-500'>
        누구나 누릴 수 있는 서울 문화행사 정보 공간, 누구나누리.
        </div>
      </div>
      <RecmmendSlide />
      <EventFeed />
      <MainBlog />
    </div>
  );
}
