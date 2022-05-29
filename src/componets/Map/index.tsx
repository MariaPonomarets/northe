import React, {useMemo} from 'react';
import MapView from 'react-native-maps';
import styles from './styles';

const Map = () => {
  const initialRegion = useMemo(
    () => ({
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }),
    [],
  );
  return <MapView style={styles.container} initialRegion={initialRegion} />;
};

export default Map;
