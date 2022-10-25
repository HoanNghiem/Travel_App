import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Animated, Dimensions, FlatList} from "react-native";
import images from '../constants/images';
import LinearGradient from "react-native-linear-gradient";
import { StatusBar } from "expo-status-bar";
const windownWidth = Dimensions.get('window').width;



export default Onboarding = ({route, navigation}) =>{
    const {us}=route.params;
    const obds = require("../Data/imgObd.json");
    const scrollX =new Animated.Value(0);

    //render data
    function renderContent(){
        return(
            <Animated.ScrollView   
                horizontal
                pagingEnabled
                //scrollEnabled
                //snapToAlignment="center"
                showsHorizontalScrollIndicator="false"
                //decelerationRate={0}
                //scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                
                {/* imgFirst */}
                <View style={styles.containers}>
                    <View
                        style={{
                            flex:1,
                            justifyContent:"center",
                            //backgroundColor:"green"
                        }}
                    >
                        <Text 
                            style={{
                                fontSize:44,
                                color:"#99ccff",
                                fontFamily:"Courier New",
                                left:3,
                                fontWeight:"bold",
                                //backgroundColor:"white"
                            }}
                        >Hello <Text>{us}</Text>!</Text>
                    </View>
                    <View style={styles.img}>
                    <Image
                            source={images.onBoardingImage}
                            resizeMode="contain"
                            style={{
                                width:"100%",
                                height:"100%"
                            }}
                        />
                    </View>

                    <View style={styles.content}>
                        <View style={{alignItems:"center", marginHorizontal: 24}}>
                            <Text style={{fontSize: 30, lineHeight: 36, color:"gray"}}>Digital Ticket</Text>
                            <Text style={{color:"grey", marginTop: 8, textAlign:"center", fontSize:16, lineHeight:22}}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary</Text>
                        </View>
                    </View>

                    {/* <View style={styles.btn}>
                        <TouchableOpacity
                        
                        style={[styles.shadow, styles.touchBtn]}
                        onPress={()=>{
                            navigation.navigate('HomeTabs')
                        }}
                        >
                            <Text style={{color:"white",fontSize:16,lineHeight:22}}>Start!:<Text>{us}</Text></Text>                
                        </TouchableOpacity>
                    </View> */}
                </View>

                {/* data */}
                {obds.map((item, index)=>(

                    // content
                    <View
                        key={item.id}
                        style={{
                            width:windownWidth
                        }}
                    >
                        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                            <Image
                                source={{uri:item.img}}
                                resizeMode="cover"
                                style={{
                                    width:"100%",
                                    height:"100%"
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position:"absolute",
                                bottom:"10%",
                                left:40,
                                right:40
                            }}
                        >
                            <Text 
                                style={{
                                    fontSize:30, 
                                    lineHeight:36,color:"gray",
                                    textAlign:"center"
                                }}>
                                    {item.title}
                                </Text>
                            <Text
                                style={{
                                    fontSize:16,
                                    lineHeight:22,
                                    textAlign:"center",
                                    color:"gray",
                                    marginTop:8
                                }}
                            >
                                {item.description}
                            </Text>
                        </View>

                        {/* button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                width: 150,
                                height: 60,
                                paddingLeft: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 0,
                                borderTopRightRadius: 0,
                                backgroundColor: "#0682FE"
                            }}
                            onPress={()=>{navigation.navigate('HomeTabs')}}
                        >
                            <Text style={{fontSize:30, color:"white"}}>Start!</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        )
    }

    //render dot
    function renderDots(){
        const dotPosition = Animated.divide(scrollX, windownWidth);
        return(
            <View style={styles.dotContainer}>
                {obds.map((item, index)=>{
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [8, 17, 8],
                        extrapolate: "clamp"
                    });
                    return(
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot,{width:dotSize, height:3}]}
                        >
                            
                        </Animated.View>
                    )
                })}
            </View>
        )
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style={{color:"black"}}/>
            <View 
            >
                {renderContent()}   
            </View>
            <View style={styles.dotRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    //Animateted
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    dotRootContainer:{
        position:"absolute",
        bottom:"28%",
        //backgroundColor:"yellow"
    },
    dotContainer:{
        flexDirection:"row",
        height:24,
        alignItems:"center",
        justifyContent:"center" ,
        //backgroundColor:"red"  
    },
    dot:{
        borderRadius:3,
        backgroundColor:"#0682FE",
        marginHorizontal:6,

    },
    
    //fist img
    containers:{
        flex:1,
        //backgroundColor:"white"
    },
    img:{
        flex:3, 
        alignItems:"center", 
        justifyContent:"center",
        width:windownWidth,
        //backgroundColor:"pink"
    },
    content:{
        flex:2, 
        alignItems:"center", 
        justifyContent:"center",
        width:windownWidth,
        //backgroundColor:"#ffcc00",
        
    },
    
})

// const styles=StyleSheet.create()
// export default Onboarding = ({route, navigation}) =>{
//     const {email}=route.params;
//     return(
//         <SafeAreaView style={styles.container}>
//             <StatusBar style={{color:"black"}}/>
//             <View style={styles.img}>
//                 <Image
//                     source={images.onBoardingImage}
//                     resizeMode="contain"
//                     style={{
//                         width:"100%",
//                         height:"100%"
//                     }}
//                 />
//             </View>

//             <View style={styles.content}>
//                 <View style={{alignItems:"center", marginHorizontal: 24}}>
//                     <Text style={{fontSize: 22, lineHeight: 30}}>Digital Ticket</Text>
//                     <Text style={{color:"grey", marginTop: 24, textAlign:"center", fontSize:16, lineHeight:30}}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary</Text>
//                 </View>
//             </View>

//             <View style={styles.btn}>
//                 <TouchableOpacity
//                 style={[styles.shadow, styles.touchBtn]}
//                 onPress={()=>{
//                     navigation.navigate('HomeTabs')
//                 }}
//                 >
//                     <Text style={{color:"white",fontSize:16,lineHeight:22}}>Start!:<Text>{email}</Text></Text>                
//                 </TouchableOpacity>
//             </View>
            
//         </SafeAreaView>
//     )
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         backgroundColor:"white"
//     },
//     img:{
//         flex:1, 
//         alignItems:"center", 
//         justifyContent:"center",
//         //backgroundColor:"pink"
//     },
//     content:{
//         flex:1, 
//         alignItems:"center", 
//         justifyContent:"center",
//         //backgroundColor:"#ffcc00"
//     },
//     btn:{
//         width:"100%", 
//         height:100,
//         alignItems:"center", 
//         justifyContent:"center",
//         //backgroundColor:"black"
//     },
//     touchBtn:{
//         width:"70%",
//         height:50,
//         alignItems:"center",
//         justifyContent:"center", 
//         backgroundColor:"blue",
//         borderRadius:15 
//     },
//     shadow:{
//         shadowColor:"#000",
//         shadowOffset:{
//             width:0,
//             height:2
//         },
//         shadowOpacity:0.25,
//         shadowRadius:3.84,
//         elevation:5

//     }
// })