import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { AppProvider } from './src/context/AppContext';
import ColorGameScreen from './src/features/colorGame/screens/ColorGameScreen';
import { useEffect } from 'react';
import { initTTS } from './src/utils/tts';

function App() {
  useEffect(() => {
    // Initialize TTS when the app starts
    initTTS();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <AppProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppContent />
        </SafeAreaProvider>
      </AppProvider>
    </Provider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <ColorGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
