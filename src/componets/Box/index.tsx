import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {BoxProps} from './types';
import createStyles from './styles';

const Box: FC<BoxProps> = ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  position,
  bbw,
  btw,
  brw,
  blw,
  btrr,
  bbrr,
  btlr,
  bblr,
  borderRadius,
  borderWidth,
  width,
  height,
  borderColor,
  style,
  children,
  ...restViewProps
}) => {
  const {box} = useMemo(
    () =>
      createStyles({
        flex,
        flexDirection,
        justifyContent,
        alignItems,
        position,
        bbw,
        btw,
        brw,
        blw,
        btrr,
        bbrr,
        btlr,
        bblr,
        borderRadius,
        borderWidth,
        width,
        height,
        borderColor,
      }),
    [
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      position,
      bbw,
      btw,
      brw,
      blw,
      btrr,
      bbrr,
      btlr,
      bblr,
      borderRadius,
      borderWidth,
      width,
      height,
      borderColor,
    ],
  );
  return (
    <View style={[box, style]} {...restViewProps}>
      {children}
    </View>
  );
};
export default Box;
