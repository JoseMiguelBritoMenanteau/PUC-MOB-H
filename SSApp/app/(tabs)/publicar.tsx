import { Pressable, Text, View, StyleSheet, Image, TextInput } from "react-native";
import Publish from '@/pages/publish/Publish';

export default function PublishTab() {
  return (
    <View style={{ flex: 1, paddingTop: 50 , backgroundColor: "#23232A"}}>
      <Publish />
    </View>
  );
}


