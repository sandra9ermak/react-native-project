import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const AddPost = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  // const takePhoto = async () => {
  //   const picture = await camera.takePictureAsync();
  //   const location = await Location.getCurrentPositionAsync();
  //   console.log("location", location);
  //   console.log("HYUGTYFTD");
  //   setPhoto(picture.uri);
  //   console.log("photo", photo);
  // };

  // const sendPhoto = () => {
  //   console.log("navigation", navigation);
  //   navigation.navigate("Default", { photo });
  // };

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //     }
  //   })();
  // }, []);
    const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      console.log('statusCam', status);
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    const takePhoto = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
    }
    console.log("photo",photo);
    // console.log(Camera.takePictureAsync());
    // console.log('camera->', photo.uri);
  }

  return (
    <>
    <View style={{ flex: 1 }}>
      <Camera style={styles.camera} ref={(ref) => { setCameraRef(ref) }}>
        {photo && (
          <>
            <View style={styles.snap}>
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            </View>
          </>
        )}
        <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
          <TouchableOpacity
            style={styles.styledBtn}
            onPress={takePhoto}
          ></TouchableOpacity>
        </TouchableOpacity>
      </Camera>
      {/* <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity style={styles.sendBtn} onPress={sendPhoto}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </View> */}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  camera: {
    height: "80%",
    marginTop: 50,
    marginHorizontal: 1,
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraBtn: {
    backgroundColor: "#ccdaeb",
    color: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  styledBtn: {
    backgroundColor: "#46484a",
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  sendBtn: {
    borderColor: "#ccdaeb",
    borderWidth: 3,
    width: 300,
    height: 50,
    borderRadius: 50,
    alignItems: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  sendBtnText: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
  },
  snap: {
    position: "absolute",
    top: 0,
    left: 0,
    borderColor: "red",
    borderWidth: 1,
    height: "100%",
    width: "100%",
  },
});

export default AddPost;