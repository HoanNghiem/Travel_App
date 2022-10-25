import React, { Component, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  Image,StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import icons from '../constants/icons';
import { Formik } from 'formik';
import { SignupSchema } from './validate';
const windownWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Login = ({ navigation }) => {
  const dataUser =require("../Data/user.json");
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  // const [getUser, setUser] = useState('');
  // const [getPass, setPass]=useState('');
  return(
    <SafeAreaView style={styles.areaView}>
      {/* <StatusBar barStyle="light-content"/> */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ username: '' , password:''}}
          onSubmit={values => console.log(values)}
          validationSchema={SignupSchema}
        >
        {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (

          <View style={styles.container}>
            {/* Email & pass */}
            <View style={styles.user_pass}>
              {/* Email */}
              <View style={styles.user}>
                <Text style={{color: 'white'}}>Username</Text>
                <TextInput 
                  style={styles.inputU}
                  autoCapitalize='none'
                  // value={getUser}
                  // onChangeText={setUser}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                /> 
              </View>
              {errors.username && touched.username ? (
                  <Text 
                    style={{
                      color:"red", 
                      backgroundColor:"green",
                      width:"60%",
                      marginLeft:76
                    }}>{errors.username}</Text>
                ) : null}


              {/* Pass */}
              <View style={styles.pass}>
                <Text style={{color: 'white'}}>Password</Text>
                <TextInput 
                  style={styles.inputP}
                  autoCapitalize='none'
                  // value={getPass}
                  // onChangeText={setPass}
                  secureTextEntry={getPasswordVisible? false : true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity 
                  style={{height: '100%', width: 30, position: 'absolute', right: 0}}
                  onPress={() => {
                    setPasswordVisible(!getPasswordVisible)
                  }}
                >
                  { getPasswordVisible ?
                    <Image source={icons.invisible} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
                    :
                    <Image source={icons.visible} style={{width: '100%', height: '100%'}} resizeMode="contain"/>
                  }
                </TouchableOpacity>
              </View>
              {errors.password && touched.password ? (
                  <Text 
                    style={{
                      color:"red",
                      backgroundColor:"green",
                      width:"60%",
                      marginLeft:76
                    }}>{errors.password}</Text>
                ) : null}
            </View>

            {/* Buttons login & register */}
            <View style={styles.Btn}>
              {/* Dang nhap */}
              <TouchableOpacity
                style={styles.btnLogin}
              
                onPress={() => {
                  {dataUser.map((item,index)=>{
                    if(values.username==item.users && values.password==item.passs){
                      navigation.navigate('Onboarding',{
                        us: values.username
                      });
                    }
                  })}
                }}
              >
                <Text style={styles.textBtn}>Login</Text>
              </TouchableOpacity>
              {/* Dang ky */}
              <TouchableOpacity style={styles.btnRegister}
              onPress={()=>{
                navigation.navigate("Register")
              }}
              >
                <Text style={styles.textBtn}>Register</Text>
              </TouchableOpacity>
            </View>

            <View 
              style={{
                //flexDirection:"row",
                //backgroundColor:"black",
                justifyContent:"center",
                //alignItems:"flex-end",
                height:100,
                marginTop:30
              }}
            >
              <View style={{justifyContent:"center",alignItems:"center"}}>
                <View style={{borderColor:"white",width:"30%", borderWidth:0.5,height:1,}}></View>
                <Text 
                  style={{
                    color:"white",
                    position:"absolute",
                    backgroundColor:"#0066cc",
                    width:38,
                    textAlign:"center"}}>Or</Text>
              </View>
              <View style={{flexDirection:"row",/*backgroundColor:"white",*/justifyContent:"center",marginTop:36}}>
                <TouchableOpacity>
                  <Image
                    source={icons.facebook}
                    style={{
                      width:35,
                      height:35,
                      marginRight:13
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={icons.google}
                    style={{
                      width:35,
                      height:35
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            
          </View>
        )}
        </Formik>
      </TouchableWithoutFeedback>
      </SafeAreaView>    
  )
}
const styles=StyleSheet.create({
    areaView:{
        flex: 1, 
        backgroundColor:'#0066cc'
    },
    container:{
        height: '100%', 
        width: '100%',
        //backgroundColor:"pink"
    },
    user_pass:{
        width: '100%', 
        height: '20%', 
        marginTop: 0.2 * windowHeight, 
        alignItems: 'center',
        //backgroundColor:"black"
    },
    user:{ 
        width: '80%', 
        height: 30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        //backgroundColor:"yellow"
    },
    inputU:{ 
        color: 'white', 
        height: '100%', 
        width: '74%', 
        borderBottomColor: 'white', 
        borderBottomWidth: 1, 
        //textAlign: 'right',
        //backgroundColor:"red"
    },
    pass:{ 
        width: '80%', 
        height: 30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 28,
        //backgroundColor:"yellow"
    },
    inputP:{ 
        color: 'white', 
        height: '100%', 
        width: '74%', 
        borderBottomColor: 'white', 
        borderBottomWidth: 1, 
        //textAlign: 'right', 
        paddingRight: 40,
       //backgroundColor:"red"
    },
    Btn:{ 
        width: '100%', 
        height: '20%', 
        marginTop: 0.1 * windowHeight, 
        justifyContent: 'center', 
        alignItems: 'center',
        //backgroundColor:"black"
    },
    btnLogin:{ 
        width: '60%', 
        height: '30%', 
        borderColor: 'white', 
        borderWidth: 1, 
        borderRadius: 100, 
        backgroundColor: '#18A2EB', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    textBtn:{
        color: 'white', 
        fontSize: 20
    },
    btnRegister:{ 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#4D33B9', 
        marginTop: 20, 
        width: '60%', 
        height: '30%', 
        borderColor: 'white', 
        borderWidth: 1,
    }
})