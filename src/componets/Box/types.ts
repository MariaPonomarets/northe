import {ViewStyle, ViewProps} from 'react-native';

export type FlexProps = {
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
};

export type PositionProps = {
  position?: ViewStyle['position'];
  padding?: ViewStyle['padding'];
};

export type BorderProps = {
  bbw?: ViewStyle['borderBottomWidth'];
  btw?: ViewStyle['borderTopWidth'];
  brw?: ViewStyle['borderRightWidth'];
  blw?: ViewStyle['borderLeftWidth'];
  btrr?: ViewStyle['borderTopRightRadius'];
  bbrr?: ViewStyle['borderBottomRightRadius'];
  btlr?: ViewStyle['borderTopLeftRadius'];
  bblr?: ViewStyle['borderBottomLeftRadius'];
  borderRadius?: ViewStyle['borderRadius'];
  borderWidth?: ViewStyle['borderWidth'];
  borderColor?: ViewStyle['borderColor'];
};

export type LayoutProps = {
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
};

export type StyleProps = FlexProps & PositionProps & BorderProps & LayoutProps;

export type BoxProps = ViewProps & StyleProps;
