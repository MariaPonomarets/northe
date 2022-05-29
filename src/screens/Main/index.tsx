import React from 'react';
import Map from '../../componets/Map';
import BottomSheet from '../../componets/BottomSheet';
import QR from '../../componets/QR';
import Box from '../../componets/Box';
import List from '../../componets/List';

const Main = () => (
  <>
    <Map />
    <BottomSheet>
      <Box flex={1}>
        <QR />
      </Box>
      <Box flex={1}>
        <List />
      </Box>
    </BottomSheet>
  </>
);

export default Main;
