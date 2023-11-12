const CollectAPI = async (
  startIndex: number,
  endIndex: number,
  codename?: string,
): Promise<string> => {
  try {
    let apiUrl = `/api/culturalEventInfo/json/${startIndex}/${endIndex}/`;

    if (codename) {
      apiUrl += `${codename.replace(/_/g, '/')}`;
    }
    const res = await fetch(apiUrl, { next: { revalidate: 0 } });

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
