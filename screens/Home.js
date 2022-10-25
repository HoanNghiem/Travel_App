import React,{Component} from "react";
import {View, Text, StyleSheet,Image,FlatList, TouchableOpacity, Dimensions,Animated,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../constants/images";
import icons from "../constants/icons";

import LinearGradient from "react-native-linear-gradient";
const windownWidth = Dimensions.get('window').width;
const banner = require("../Data/bannerImg.json");

const OptionItem=({icon, onPress, label})=>{
    return(
        <TouchableOpacity
        style={{flex:1, justifyContent:"center", alignItems:"center"}}
        onPress={onPress}
        >

        <View style={[styles.shadow, {width:60, height:60}]}>
            <View
            style={{flex:1, alignItems:"center", justifyContent:"center", borderRadius:15, backgroundColor:"#ff3399"}}
            >
                <Image
                    source={icon}
                    resizeMode="cover"
                    style={{
                        tintColor:"white",
                        width:30,
                        height:30
                    }}
                >

                </Image>
            </View>
        </View>
        <Text style={{marginTop:8, color:"grey", fontSize:14, lineHeight:22}}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Home = ({navigation}) =>{
    
    const [tourist]=React.useState(require("../Data/Tourist.json"))

    //get data
    function renderTourist(item, index){
        return(
            <TouchableOpacity
                style={{justifyContent:"center", marginHorizontal:8, }}
                onPress={()=> navigation.navigate("Detail")}
            >
                <Image 
                    source={{uri:item.img}}
                    resizeMode="cover"
                    style={{
                        width:windownWidth * 0.28,
                        height:"82%",
                        borderRadius:15
                    }}
                />

                <Text style={{marginTop:4,fontSize:14,lineHeight:22}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style={{color:"black"}}/>
            {/* Banner */}
            <Animated.ScrollView 
                style={{flex:1, marginTop:8, paddingHorizontal:24, /*backgroundColor:"yellow"*/}}
                horizontal
                pagingEnabled
                //scrollEnabled
                // snapToAlignment="center"
                showsHorizontalScrollIndicator="false"
            >
                {banner.map((itemBn,indexBn)=>(
                    <View
                        key={itemBn.id}
                        style={{width:windownWidth,/*backgroundColor:"red"*/}}
                    >
                        {/* <View style={{flex:1, flexDirection:"row",backgroundColor:"blue"}}> */}
                            <Image
                                source={{uri:itemBn.img}}
                                resizeMode="cover"
                                style={{
                                    width:"87%",
                                    height:"100%",
                                    borderRadius:15,
                                }}
                            />
                
                        {/* </View> */}
                    </View>
                ))}
            </Animated.ScrollView>

            {/* Options */}
            <View style={{flex:1, justifyContent:"center",/*backgroundColor:"pink"*/}}>
                    <View style={{flexDirection:"row", marginTop: 24, paddingHorizontal:8,/*backgroundColor:"black"*/}}>
                        <OptionItem
                            icon={icons.airplane}
                            label="Flight"
                            onPress={()=>{navigation.navigate("flightTicket")}}
                        />

                        <OptionItem
                            icon={icons.train}
                            label="Train"
                            onPress={()=>{console.log("Train")}}
                        />

                        <OptionItem
                            icon={icons.bus}
                            label="Bus"
                            onPress={()=>{console.log("Bus")}}
                        />

                        <OptionItem
                            icon={icons.taxi}
                            label="Taxi"
                            onPress={()=>{console.log("Taxi")}}
                        />
                    </View>

                    <View style={{flexDirection:"row", marginTop: 24, paddingHorizontal:8,/*backgroundColor:"black"*/}}>
                        <OptionItem
                            icon={icons.bed}
                            label="Hotel"
                            onPress={()=>{console.log("Hotel")}}
                        />

                        <OptionItem
                            icon={icons.eat}
                            label="Eat"
                            onPress={()=>{console.log("Eat")}}
                        />

                        <OptionItem
                            icon={icons.compass}
                            label="Adventure"
                            onPress={()=>{console.log("Adventure")}}
                        />

                        <OptionItem
                            icon={icons.event}
                            label="Event"
                            onPress={()=>{console.log("Event")}}
                        />
                    </View>
            </View>

            {/* Tourist */}
            <View style={{flex:1,/*backgroundColor:"#ffcc00"*/}}>
                <Text style={{marginTop: 8,marginHorizontal:24, fontSize:22, lineHeight:30,/*backgroundColor:"#00ff00"*/}}>Tourist</Text>
                <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}               
                data={tourist}
                keyExtractor={item => item.id.toString()}
                renderItem={({item, index}) => renderTourist(item,index)}
                // style={{
                //     backgroundColor:"#00b3b3"
                // }}
                />

                
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    shadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5

    }
})