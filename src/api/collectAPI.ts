const CollectAPI = async (startIndex: number, endIndex: number): Promise<string> => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const apiUrl = `${baseURL}/${apiKey}/json/culturalEventInfo/${startIndex}/${endIndex}/`;
    const res = await fetch(apiUrl, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    const dataString = JSON.stringify(data);

    console.log('data', data);
    return dataString;
  } catch (error) {
    console.error(error);
    return '';
  }
};

export default CollectAPI;
