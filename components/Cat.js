import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function Cat({ name, imageUrl, description }) {
  return (
    <View style={{ margin: 20, borderColor: "black", borderWidth: 2 }}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={{ padding: 10, textAlign: "center" }}>{name}</Text>
      {description != undefined && (
        <Text style={{ padding: 10, fontSize: 20 }}>{description}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "90%",
    margin: 16,
    alignContent: "center",
    alignItems: "center",
  },
});
export default Cat;
