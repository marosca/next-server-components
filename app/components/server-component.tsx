import { getData } from '../utils/request';

const ServerComponent = async () => {
  const data = await getData();
  console.log('***** data from ServerCmoponent', data.id);
  return (
    <div>
      <h2>Server component</h2>
    </div>
  );
};

export default ServerComponent;
