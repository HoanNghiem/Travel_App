import React,{Component} from "react";
import {View, Text,Image, SafeAreaView,StyleSheet,TouchableOpacity} from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import icons from "../constants/icons";


export default User = ({route, navigation}) =>{
    const userdata = require("../Data/user.json");
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
             <StatusBar style={{color:"black"}}/>
            
                {userdata.map((item,index)=>(
                    // container
                    <View
                    key={index}
                        style={{
                            flex:1,
                            //backgroundColor:"pink"
                        }}
                    >
                        {/* avt_profile */}
                        <View
                            style={{
                                width:"100%",
                                height:230,
                                //backgroundColor:"yellow",
                                //flexDirection:"row",
                                marginTop:20,
                                borderBottomWidth:2,
                                borderBottomColor:"gray"
                            }}
                        >
                            {/* avatar */}
                            <View 
                                style={{
                                    marginVertical:10,
                                    marginHorizontal:20,
                                    //backgroundColor:"white",
                                    flexDirection:"row",
                                    flex:1,
                                    borderWidth:1,
                                    borderRadius:6,
                                    borderColor:"grey"
                                }}
                            >
                                <View style={{justifyContent:"center"}}>
                                    <Image
                                        source={{uri:item.avt}}
                                        style={{
                                            width:80,
                                            height:80,
                                            borderRadius:40,
                                            marginRight:20
                                        }}
                                    />
                                </View>
                                <View style={{justifyContent:"center",/*backgroundColor:"red"*/}}>
                                    <Text style={{fontSize:30,/*backgroundColor:"green"*/}}>{item.users}</Text>
                                    <Text style={{color:"grey",/*backgroundColor:"yellow"*/}}>{item.id}</Text>
                                </View>
                            </View>
                            
                            {/* profile */}
                            <View
                                style={{
                                    flex:1,
                                    //backgroundColor:"green",
                                    //marginTop:10,
                                    marginRight:10,
                                    marginLeft:10,
                                    marginBottom:10,
                                    justifyContent:"center"
                                }}
                            >
                                {/* location */}
                                <View
                                    style={styles.profile}
                                >
                                    <Image
                                        source={icons.location}
                                        style={styles.iconProfile}
                                    />
                                    <Text style={styles.textProfile}>{item.location}</Text>
                                </View>

                                {/* phone */}
                                <View
                                    style={styles.profile}
                                >
                                    <Image
                                        source={icons.phone}
                                        style={styles.iconProfile}
                                    />
                                    <Text style={styles.textProfile}>{item.phone}</Text>
                                </View>

                                {/* mail */}
                                <View
                                     style={styles.profile}
                                >
                                    <Image
                                        source={icons.mail}
                                        style={styles.iconProfile}
                                    />
                                    <Text style={styles.textProfile}>{item.email}</Text>
                                </View>
                            </View>
                        </View>
                        
                        {/* content */}
                        <View
                            style={{
                                height:350,
                                backgroundColor:"white",
                                marginTop:20
                            }}
                        >
                            {/* favorites */}
                            <TouchableOpacity
                                style={styles.content}
                            >
                                <Image
                                    source={icons.heart}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Your Favorites</Text>
                            </TouchableOpacity>

                            {/* share */}
                            <TouchableOpacity
                                style={styles.content}
                            >
                                <Image
                                    source={icons.share}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Tell Your Friends</Text>
                            </TouchableOpacity>

                            {/* payment */}
                            <TouchableOpacity
                                style={styles.content}
                            >
                                <Image
                                    source={icons.payment}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Payment</Text>
                            </TouchableOpacity>

                            {/* support */}
                            <TouchableOpacity
                                style={styles.content}
                            >
                                <Image
                                    source={icons.support}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Support</Text>
                            </TouchableOpacity>

                            {/* setting */}
                            <TouchableOpacity
                                style={styles.content}
                            >
                                <Image
                                    source={icons.setting}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Settings</Text>
                            </TouchableOpacity>

                            {/* logout */}
                            <TouchableOpacity
                                style={styles.content}
                                onPress={()=>{
                                    navigation.navigate("Login");
                                }}
                            >
                                <Image
                                    source={icons.logout}
                                    style={styles.icon}
                                />
                                <Text style={styles.textContent}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    profile:{
        flexDirection:"row",
        marginHorizontal:10,
        //backgroundColor:"white",
        marginVertical:5,
    },
    iconProfile:{
        width:20,
        height:20,
        tintColor:"gray",
        marginRight:18,
        //backgroundColor:"red"
    },
    textProfile:{
        color:"grey",
        //backgroundColor:"red"
    },
    icon:{
        resizeMode:"cover",
        //width:28,
        //height:32,
        tintColor:"#ff1a66",
        marginRight:18,
        //backgroundColor:"yellow"
    },
    content:{
        flexDirection:"row",
        //backgroundColor:"green",
        marginHorizontal:20,
        marginVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        height:38,
        alignItems:"center"
    },
    textContent:{
        color:"grey",
        fontSize:18,
        //backgroundColor:"white"
    }
})