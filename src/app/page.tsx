import EventFeed from './main/_component/EventFeed';
import MainBanner from './main/_component/MainbannerSlide';
import RecmmendSlide from './main/_component/RecommendProgram';
import MainReview from './main/_component/Review';

export default function Home() {
  return (
    <div className='flex-col align-center'>
      <MainBanner />
      <div className='text-center my-24	'>
        <h2 className='scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
          &quot;미는 진리이고, 진리는 미다&quot;
        </h2>
        <div className='mt-1.5 text-gray-500'>
          한 알의 모래 속에서 세계를 보며 한 송이 들꽃에서 천국을 본다.
        </div>
      </div>
      <RecmmendSlide />
      <EventFeed />
      <MainReview />
    </div>
  );
}
