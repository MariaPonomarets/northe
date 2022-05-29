import {useCallback, useMemo, useRef} from 'react';
import RNBottomSheet from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';

const useBottomSheet = () => {
  const bottomSheetRef = useRef<RNBottomSheet>(null);
  const {top, bottom} = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const snapPoints = useMemo(
    () => [(height - top - bottom) / 2, height - top],
    [bottom, height, top],
  );

  const handleSheetChanges = useCallback(() => {
    // do smth index
  }, []);

  return {
    bottomSheetRef,
    snapPoints,
    handleSheetChanges,
    bottom,
  };
};

export default useBottomSheet;
