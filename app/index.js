import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $border: '#E2E2E2',
  $white: '#FFFFFF',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',

  // outline:1,
});

export default () => <Home />;
