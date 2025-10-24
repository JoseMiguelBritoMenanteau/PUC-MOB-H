import { Stack } from "expo-router";
import { PublicacionesProvider } from '../context/PublicacionesContext';

export default function RootLayout() {
  return (
    <PublicacionesProvider>
      <Stack />
    </PublicacionesProvider>
  );
}
