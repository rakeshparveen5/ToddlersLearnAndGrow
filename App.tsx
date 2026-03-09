import { ActivityIndicator, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { AppProvider } from './src/context/AppContext';
import ColorGameScreen from './src/features/colorGame/screens/ColorGameScreen';
import { useEffect, useState } from 'react';
import { initTTS, speak } from './src/utils/tts';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize TTS when the app starts
    const startApp = async () => {
      await initTTS();

      setTimeout(() => {
        speak("Find the color");
        setLoading(false);
      }, 500);
    };

    startApp();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <AppProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          {loading ? (<LoadingScreen />) : (<AppContent />)}
        </SafeAreaProvider>
      </AppProvider>
    </Provider>
  );
}

function LoadingScreen() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
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
  loaderContainer: {
    backgroundColor: "#e9f6fb",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
