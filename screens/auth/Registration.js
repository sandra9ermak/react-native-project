import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
} from "react-native";

export default function Registration({ navigation }) {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [userName, setUserName] = useState("");
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
    console.log("email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
    setUserName("");
  };

  const hidenKeyboardWithoutFeedback = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hidenKeyboardWithoutFeedback}>
      <View style={styles.container}>
        {/* <Image source={require("../../assets/logo_natali_candles.png")} /> */}
        <KeyboardAvoidingView
          behavior={(Platform.OS = "ios" ? "padding" : "height")}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: showKeyboard ? -200 : -200,
              width: dimensions,
            }}
          >
            <Text style={styles.mainTitle}>Sign Up Your Account</Text>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={userName}
                onChangeText={(value) => setUserName(value)}
                placeholder="USERNAME"
                placeholderTextColor="#DCDCDW"
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="EMAIL"
                placeholderTextColor="#DCDCDW"
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="PASSWORD"
                placeholderTextColor="#DCDCDW"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={hidenKeyboard}
            >
              <Text style={styles.btnText}>sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 20,
              }}
            >
              <Text
                style={{ color: "#ff0000", fontSize: 20 }}
                onPress={() => navigation.navigate("Login")}
              >
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6E6969",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  mainTitle: {
    // flex: 1,
    color: "#464A4B",
    fontWeight: "700",
    fontSize: 32,
    // paddingLeft: 10,
    letterSpacing: 1.5,
    marginTop: 20,
    marginBottom: 50,
    textAlign: "center"
  },
  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 700,
    position: "relative",
    marginTop: 300,
    paddingTop: 30,
    paddingHorizontal: 65
  },
  input: {
    borderWidth: 2,
    borderColor: "#DCDCDC",
    width: 250,
    borderRadius: 50,
    color: "#464A4B",
    fontWeight: "700",
    textAlign: "center",
    height: 40,
  },
  inputTitle: {
    color: "#000",
    fontWeight: "700",
    fontSize: 17,
    paddingLeft: 10,
    letterSpacing: 1.5,
    // fontFamily: "Lora-Medium",
  },
  button: {
    backgroundColor: "#B53533",
    height: 45,
    width: 150,
    borderRadius: 50,
    marginTop: 30,
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