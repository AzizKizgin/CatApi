import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import Cat from "../components/Cat";

function FeedScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCats = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds?api_key=bfe7223b-1946-4826-9825-3eaaf6f95b25"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("Detail", {
                    name: item.name,
                    description: item.description,
                    image:
                      item.image?.url ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4st1UElApir6rjjTzjzywGTctSfptY9xKktRqDUC&si",
                  })
                }
                android_ripple={{ color: "orange" }}
              >
                <Cat
                  name={item.name}
                  imageUrl={
                    item.image?.url ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4st1UElApir6rjjTzjzywGTctSfptY9xKktRqDUC&si"
                  }
                />
              </Pressable>
            );
          }}
        />
      )}
    </View>
  );
}

export default FeedScreen;
