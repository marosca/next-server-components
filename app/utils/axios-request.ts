import axios from 'axios';

import { unstable_cache } from 'next/cache';
// On getSome.js
export const getAxiosData = unstable_cache(async () => {
  const res = await axios.get('https://random-data-api.com/api/v2/users');
  return res.data;
});
