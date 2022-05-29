import React from 'react';
import {Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import Box from '../Box';
import styles from './styles';

const QR = () => {
  const onSuccess = (e: BarCodeReadEvent) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <Box flex={1} padding={16}>
      <QRCodeScanner
        cameraStyle={styles.cameraStyle}
        cameraContainerStyle={styles.cameraContainerStyle}
        onRead={onSuccess}
        markerStyle={styles.markerStyle}
        fadeIn
        showMarker
        flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </Box>
  );
};

export default QR;
