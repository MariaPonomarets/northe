import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import RNBottomSheet from '@gorhom/bottom-sheet';
import useBottomSheet from './useBottomSheet';
import createStyle from './styles';

const BottomSheet: FC = ({children}) => {
  const {bottomSheetRef, snapPoints, handleSheetChanges, bottom} =
    useBottomSheet();
  const styles = useMemo(() => createStyle(bottom), [bottom]);

  return (
    <RNBottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <View style={styles.container}>{children}</View>
    </RNBottomSheet>
  );
};

export default BottomSheet;
