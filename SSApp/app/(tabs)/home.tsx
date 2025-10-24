import { Pressable, Text, View, StyleSheet, Image, TextInput } from "react-native";
import Feed from '../../pages/feed/Feed';

export default function Home() {

  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "#23232A" }}>
      <Feed/>
    </View>
  );
}



