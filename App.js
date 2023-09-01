import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import HomeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
   <HomeScreen />
      <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
