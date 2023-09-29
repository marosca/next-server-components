import { getAxiosData } from '../utils/axios-request';
import { getData } from '../utils/request';

const ServerComponent = async () => {
  // const data = await getData();
  const data = await getAxiosData();
  console.log('***** data from ServerCmoponent', data.id);
  return (
    <div>
      <h2>Server component</h2>
    </div>
  );
};

export default ServerComponent;
