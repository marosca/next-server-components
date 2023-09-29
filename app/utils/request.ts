export async function getData() {
  // This request should be cached until manually invalidated.
  // Similar to `getStaticProps`.
  // `force-cache` is the default and can be omitted.
  // const res = await fetch('https://random-data-api.com/api/v2/users', {
  //   cache: 'force-cache',
  // });

  // // Invalidate cache on demand via api deleting by tag or path
  // const res = await fetch('https://random-data-api.com/api/v2/users', {
  //   next: { tags: ['collection'] },
  // });

  // // revalidate --> getStaticProps with revalidate
  // const res = await fetch('https://random-data-api.com/api/v2/users', {
  //   next: { revalidate: 10 },
  // });

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`.
  const res = await fetch('https://random-data-api.com/api/v2/users', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  // console.log('****** hago petición ***************************');
  return res.json();
}
