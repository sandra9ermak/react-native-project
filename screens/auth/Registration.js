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
              marginBottom: showKeyboard ? -50 : 50,
              width: dimensions,
            }}
          >
            <Text style={styles.mainTitle}>Sign Up Your Account</Text>
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.inputTitle}>UserName</Text>
              <TextInput
                style={styles.input}
                onFocus={() => {
                  setShowKeyboard(true);
                }}
                value={userName}
                onChangeText={(value) => setUserName(value)}
              />
            </View>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
    marginTop: 20,
  },
  mainTitle: {
    color: "#FEE774",
    fontWeight: "700",
    fontSize: 28,
    paddingLeft: 10,
    letterSpacing: 1.5,
    marginBottom: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: "#fff",
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
    backgroundColor: "#FEE774",
    height: 50,
    width: 120,
    borderRadius: 50,
    marginTop: 20,
    borderColor: "#fff",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
});
