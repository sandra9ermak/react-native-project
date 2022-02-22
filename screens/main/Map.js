import MapView, { Marker } from "react-native-maps";
import { View } from "react-native-web";

const Map = () => {
  return (
    <View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: 50.516339,
          latitude: 30.602185,
          longitudeDelta: 0.1,
          latitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={{ longitude: 50.516339, latitude: 30.602185 }} />
      </MapView>
    </View>
  );
};

export default Map;
