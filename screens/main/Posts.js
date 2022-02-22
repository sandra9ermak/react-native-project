import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Default from "../nested/Default";
import Map from "../nested/Map";
import Comments from "../nested/Comments";

const Posts = ({ route }) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Default" component={Default} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
  );
};

export default Posts;
