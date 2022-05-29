import React, {memo} from 'react';
import Box from '../../../Box';
import BaseText from '../../../BaseText';
import {useTheme} from '../../../../theme/useTheme';

const ListItem = ({title, subtitle}: {title: string; subtitle: string}) => {
  const {colors} = useTheme();

  return (
    <Box
      bbw={1}
      borderColor={colors.divider}
      justifyContent="center"
      padding={16}>
      <BaseText fontSize={16} color={colors.text} fontWeight="bold">
        {title}
      </BaseText>
      <BaseText fontSize={14} color={colors.textSecondary}>
        {subtitle}
      </BaseText>
    </Box>
  );
};

export default memo(ListItem);
