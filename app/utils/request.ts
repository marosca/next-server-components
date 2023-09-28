export async function getData() {
  // default - force cache
  const res = await fetch('https://random-data-api.com/api/v2/users', {
    cache: 'force-cache',
  });

  // on demand
  // const res = await fetch('https://random-data-api.com/api/v2/users', {
  //   next: { tags: ['collection'] },
  // });

  // revalidate
  // const res = await fetch('https://random-data-api.com/api/v2/users', {
  //   next: { revalidate: 10 },
  // });

  {
    cache: 'force-cache';
  }
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  // console.log('****** hago petición ***************************');
  return res.json();
}
