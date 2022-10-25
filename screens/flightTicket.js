import React, {useState} from "react";
import {StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView} from 'react-native';
import { ModalPicker } from "./ModalPiker";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const flightTicket = () => {
  const [chooseData, setchooseData] = useState('Seclect location...');
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }
  const setData = (option) => {
    setchooseData(option)
  }
  
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.tieudelon}>Where you want to go?</Text>
      <View >
        <View style={{flexDirection: 'row', marginRight: 170}}>
        <Entypo name="location-pin" size={30} color="black" style={{
          top: 0, 
          left: 0
        }} />
        <Text style={{flexDirection: 'row', fontSize: 20 }}>Boston (BOS)</Text>
        <TouchableOpacity><AntDesign name="downcircleo" size={20} color="black" style={{marginTop: 5}}/></TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Choose destination: </Text>
      </View>
      <View style={styles.choose}>
        <TouchableOpacity 
        onPress={() =>changeModalVisibility(true)}
        style={styles.touchableOpacity}>
          <Text style={styles.text}>{chooseData}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() =>changeModalVisibility}
        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
      </View>
      <View style={styles.listcard}>
            <View style={styles.headerContainer}>
                <Text style={styles.textHeader}>Currently Watched Items</Text>
                <Text style={styles.textHeader}>VIEW ALL(12)</Text>
            </View>
      </View>
      <View style={styles.price}>
            <LinearGradient
                          style={[{ height: 70, width: '100%', borderRadius: 15, marginTop: 200 }]}
                          colors={['#edf0fc', '#d6dfff']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 0 }}
            >
               <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 25, color: 'black', marginLeft: 10 }}>PRICE</Text>
                        </View>

                        <TouchableOpacity
                            style={{ width: 130, height: '80%', marginHorizontal: 24 }}
                            onPress={() => { console.log("Booking on pressed") }}
                        >
              <LinearGradient
                            style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }]}
                            colors={['#46aeff', '#5884ff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
              >
                                <Text style={{ color: '#fff', fontSize: 25 }}>BOOKING</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                </View>
            </LinearGradient>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 200
  },
  tieudelon:{
    fontSize: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    color: '#2196f3',
    //backgroundColor:"yellow"
  },
  choose: {
    width: 400,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    //backgroundColor:"green"
  },
  text: {
    marginVertical: 20,
    fontSize: 25
  },
  touchableOpacity: {
    backgroundColor: '#bbdefb',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  title: {
    marginRight: 150,
    marginVertical: 20,
    fontSize: 20,
    //backgroundColor:"white"
  },
  price: {
    //backgroundColor: 'white',
    flexDirection: 'row', 
    alignItems: 'center',
    marginRight: 50,
    width: '100%',
    marginLeft: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:"blue"
  },
  textHeader: {
    fontSize: 18,
    paddingHorizontal: 20,
  }
});

export default flightTicket;
  
