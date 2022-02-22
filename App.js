import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import useRoute from "./router";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Lora-Medium": require("./assets/fonts/Lora-Medium.ttf"),
//   });
// };

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(true);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
