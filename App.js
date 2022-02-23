import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import useRoute from "./router";
import { store } from "./redux/store";

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Lora-Medium": require("./assets/fonts/Lora-Medium.ttf"),
//   });
// };

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return <Provider store={store}><NavigationContainer>{routing}</NavigationContainer></Provider>;
}
