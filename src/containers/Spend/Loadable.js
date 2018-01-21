import React from 'react';
import Loadable from 'react-loadable';

const SpendLoadable = Loadable({
  loader: () => import('./Spend'),
  loading: () => <div>Loading</div>
});

export default SpendLoadable;
