import {StyleSheet} from 'react-native';
import {StyleProps} from './types';

const createStyles = ({
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
  borderColor,
  borderWidth,
  width,
  height,
}: StyleProps) =>
  StyleSheet.create({
    box: {
      flex,
      flexDirection,
      justifyContent,
      alignItems,
      position,
      borderColor,
      borderWidth,
      borderRadius,
      borderBottomWidth: bbw,
      borderTopWidth: btw,
      borderRightWidth: brw,
      borderLeftWidth: blw,
      borderTopRightRadius: btrr,
      borderBottomRightRadius: bbrr,
      borderTopLeftRadius: btlr,
      borderBottomLeftRadius: bblr,
      width,
      height,
    },
  });

export default createStyles;
