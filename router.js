import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import AddPost from "./screens/main/AddPost";
import Profile from "./screens/main/Pofile";
import Posts from "./screens/main/Posts";
import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Registration";

const Stack = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <TabNavigation.Navigator
        screenOptions={{ tabBarShowLabel: false, headerShown: false }}
      >
        <TabNavigation.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Foundation name="home" size={24} color="gray" />
            ),
          }}
        />
        <TabNavigation.Screen
          name="AddPost"
          component={AddPost}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialIcons name="add" size={28} color="blue" />
            ),
          }}
        />
        <TabNavigation.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <FontAwesome5 name="user-alt" size={20} color="gray" />
            ),
          }}
        />
      </TabNavigation.Navigator>
    );
  }
};

export default useRoute;
