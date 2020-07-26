import Sort from '../index';
import App from '../../../index';

import mount from 'react-dom';
import React from 'react';

const initialState = {
  sort: {
    type: 'highestprice'
  }
};

it('mounts without crashing', () => {
  const wrapped = mount(
    <App>
      <Sort />
    </App>
  );
  wrapped.unmount();
});