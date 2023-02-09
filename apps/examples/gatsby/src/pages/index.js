import * as React from 'react';
import { useIntercom } from 'react-use-intercom';

const IndexPage = () => {
  const { boot } = useIntercom();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <button onClick={() => boot()}>Boot</button>
    </div>
  );
};

export default IndexPage;
