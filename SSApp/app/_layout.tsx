import { Stack } from "expo-router";
import { PublicacionesProvider } from '../context/PublicacionesContext';
import { AppProvider } from "@/context/Context";

export default function RootLayout() {
  return (
    <AppProvider>
      <PublicacionesProvider>
        <Stack />
      </PublicacionesProvider>
    </AppProvider>
  );
}
