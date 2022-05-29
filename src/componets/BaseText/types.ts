import {TextStyle, TextProps as RNTextProps} from 'react-native';

export type TextProps = {
  fontSize?: number;
  color?: string;
  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
};

export type BaseTextProps = TextProps & RNTextProps;
