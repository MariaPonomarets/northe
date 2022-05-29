import {StyleSheet} from 'react-native';

const createStyle = (paddingBottom: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom,
    },
  });

export default createStyle;
