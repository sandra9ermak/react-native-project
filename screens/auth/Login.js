import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dimensions, setDimensions] = useState(phoneWidth);
  const phoneWidth = Dimensions.get("window").width - 20 * 2;

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const hidenKeyboard = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
  };

  const hidenKeyboardWithoutFeedback = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hidenKeyboardWithoutFeedback}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/bg-img.jpg")}
          style={styles.bgImg}
        >
          <Text style={styles.mainTitle}>Welcome to ONLine</Text>
        </ImageBackground>
        <KeyboardAvoidingView
          behavior={(Platform.OS = "ios" ? "padding" : "height")}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: showKeyboard ? -140 : 50,
              width: dimensions,
            }}
          >
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.inputTitle}>Email</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={hidenKeyboard}
            >
              <Text style={styles.btnText}>sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{ color: "#191970", fontSize: 20 }}
                onPress={() => navigation.navigate("Registration")}
              >
                Sign up with Email
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4169E1",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    flex: 1,
    color: "#DCDCDC",
    fontWeight: "700",
    fontSize: 32,
    paddingLeft: 10,
    letterSpacing: 1.5,
    marginBottom: 50,
  },
  form: {
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#8B0000",
    width: 250,
    borderRadius: 50,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    height: 40,
  },
  inputTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
    paddingLeft: 10,
    letterSpacing: 1.5,
    // fontFamily: "Lora-Medium",
  },
  button: {
    backgroundColor: "#FF4500",
    height: 45,
    width: 100,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "#fff",
  },
});
