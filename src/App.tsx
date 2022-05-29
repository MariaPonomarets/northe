import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Main from './screens/Main';
import ThemeProvider from './theme/provider';

const App = () => (
  <SafeAreaProvider initialMetrics={initialWindowMetrics}>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default App;
