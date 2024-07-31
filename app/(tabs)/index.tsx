import { StyleSheet, Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  separator: {
    marginVertical: 30,
    width: "80%",
    height: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
