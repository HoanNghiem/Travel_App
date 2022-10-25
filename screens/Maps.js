import React,{Component} from "react";
import {View, Text, StyleSheet,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Circle, Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default Maps = () =>{
    const [pin, setpin]= React.useState({
        latitude: 21.037338,
        longitude: 105.836098
    })
    return(
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    //key: 'AIzaSyBvCfw3e_IvpYxDgemLM9lDwyuslNFb86kHoanNghiem01',
                    language: 'vn',
                    components:"country:vn"
                }}
                styles={{
                    container:{flex: 0, position:"absolute", width:"100%",zIndex:1},
                    listView:{backgroundColor:"white"}
                }}
            />
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 21.037338,
                    longitude: 105.836098,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} 
                
                provider={PROVIDER_GOOGLE}
                
            >
                <Marker 
                
                    coordinate={pin}

                    pinColor="red"

                    draggable={true}
                    onDragStart={(e)=>{
                        console.log("Drag Start", e.nativeEvent.coordinate)
                    }}
                    onDragEnd={(e)=>{
                        setpin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                />
                <Circle
                    center={pin}
                    radius={1000}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:50,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });