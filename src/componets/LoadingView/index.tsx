import React, {FC, ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import Box from '../Box';
import {useTheme} from '../../theme/useTheme';

type LoadingViewProps = {
  isLoading: boolean;
  children: ReactNode;
};

const LoadingView: FC<LoadingViewProps> = ({isLoading, children}) => {
  const {colors} = useTheme();

  return (
    <Box flex={1}>
      {isLoading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <ActivityIndicator size={'small'} color={colors.primary} />
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};
export default LoadingView;
