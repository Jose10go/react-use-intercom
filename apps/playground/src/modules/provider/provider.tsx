import * as React from 'react';
import { IntercomProvider } from 'react-use-intercom';

const Provider = () => {
  return (
    <IntercomProvider appId="jcabc7e3">
      <p>Intercom children</p>
    </IntercomProvider>
  );
};

export default Provider;
