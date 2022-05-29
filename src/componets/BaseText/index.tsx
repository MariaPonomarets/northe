import React, {FC, useMemo} from 'react';
import {Text} from 'react-native';
import {BaseTextProps} from './types';
import createStyles from './styles';

const BaseText: FC<BaseTextProps> = ({
  children,
  style,
  onPress,
  onLayout,
  numberOfLines,
  ellipsizeMode,
  onTextLayout,
  ...restProps
}) => {
  const {text} = useMemo(() => createStyles(restProps), [restProps]);
  return (
    <Text
      onLayout={onLayout}
      style={[text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      onPress={onPress}
      onTextLayout={onTextLayout}>
      {children}
    </Text>
  );
};

export default BaseText;
