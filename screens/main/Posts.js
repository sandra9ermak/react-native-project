import { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";

const Posts = ({ route }) => {
  const [posts, setPosts] = useState([]);
  // console.log("route.params", route.params);

  // useEffect(() => {
  // if (route.params) {
  //   setPosts((prev) => [...prev, route.params]);
  // }
  // }, [route.params]);

  // console.log("posts", posts);

  return (
    <View>
      <Text>PostsScreen</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          <View style={{ marginBottom: 20, alignItems: "center" }}>
            <Image
              source={{ uri: item.photo }}
              style={{ marginHorizontal: 15, height: 100 }}
            />
          </View>;
        }}
      />
    </View>
  );
};

export default Posts;
