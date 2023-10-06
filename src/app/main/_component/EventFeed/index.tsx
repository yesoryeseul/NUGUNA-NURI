import mainApi from '@/api/mainApi';

const EventFeed = async () => {
  const fetchData = await mainApi(1, 3);
  
  return <div></div>;
};

export default EventFeed;
