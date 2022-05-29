import {StyleSheet} from 'react-native';
import {BaseTextProps} from './types';

const createStyles = ({
  fontWeight,
  textAlign,
  color,
  fontSize,
}: BaseTextProps) =>
  StyleSheet.create({
    text: {
      fontWeight,
      textAlign,
      color,
      fontSize,
    },
  });

export default createStyles;
