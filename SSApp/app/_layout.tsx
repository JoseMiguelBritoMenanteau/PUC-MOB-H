import { Stack } from "expo-router";
import { PublicacionesProvider } from '../context/PublicacionesContext';
import { AppProvider } from "@/context/Context";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <PublicacionesProvider>
          <Stack screenOptions={{ headerShown: false }}/>
        </PublicacionesProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
