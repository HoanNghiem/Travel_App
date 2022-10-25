import { Formik } from 'formik';
import React, { Component, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  Image,StyleSheet, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import icons from '../constants/icons';
import { SignupSchema } from './validate';
const windownWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Register = ({ navigation }) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false);
  //const [getEmail, setEmail] = useState('');

  return(
    <SafeAreaView style={styles.areaView}>
      <StatusBar barStyle="light-content"/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{ username: '' , password:'',re_password:'',email:''}}
          onSubmit={values => console.log(values)}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
            <View style={styles.container}>
              {/* Email & password */}
              <View style={styles.email_pass}>
                {/* user */}
                <View style={styles.user}>
                  <Text style={{color: 'white'}}>Username</Text>
                  <TextInput 
                    style={styles.inputE}
                    autoCapitalize='none'
                    // value={getEmail}
                    // onChangeText={setEmail}
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
                {/* Password */}
                <View style={styles.pass}>
                  <Text style={{color: 'white'}}>Password</Text>
                  <TextInput 
                    style={styles.inputP}
                    autoCapitalize='none'
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

                {/* Re-Password */}
                <View style={styles.pass}>
                  <Text style={{color: 'white'}}>R-Pass</Text>
                  <TextInput 
                    style={styles.inputP}
                    autoCapitalize='none'
                    secureTextEntry={getPasswordVisible? false : true}
                    onChangeText={handleChange('re_password')}
                    onBlur={handleBlur('re_password')}
                    value={values.re_password}
                  />
                  <TouchableOpacity 
                    style={{height: '100%', width: 30,position: 'absolute', right: 0}}
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

                <View style={styles.pass}>
                  <Text style={{color: 'white'}}>Email</Text>
                  <TextInput 
                    style={styles.inputE}
                    autoCapitalize='none'
                    // value={getEmail}
                    // onChangeText={setEmail}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {errors.email && touched.email ? (
                  <Text 
                    style={{
                      color:"red", 
                      backgroundColor:"green",
                      width:"60%",
                      marginLeft:76
                    }}>{errors.email}</Text>
                ) : null}
              </View>

              {/* Buttons login & register */}
              <View style={styles.Btn}>
                {/* Dang nhap */}
                {/* <TouchableOpacity
                  style={styles.btnLogin}
                  onPress={() => {
                    navigation.navigate('Onboarding');
                  //   , {
                  //     email: getEmail
                  //   });
                  }}
                >
                  <Text style={styles.textBtn}>Đăng nhập</Text>
                </TouchableOpacity> */}
                {/* Dang ky */}
                <TouchableOpacity style={styles.btnRegister}
                onPress={()=>{
                  navigation.navigate("Onboarding",{
                    us:values.username
                  })
                }}
                >
                  <Text style={styles.textBtn}>Register</Text>
                </TouchableOpacity>
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
    email_pass:{
        width: '100%', 
        height: '50%', 
        marginTop: 0.1 * windowHeight, 
        alignItems: 'center',
        //backgroundColor:"black"
    },
    user:{ 
        width: '80%', 
        height: 30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        //backgroundColor:"#ffcc00"
    },
    inputE:{ 
        color: 'white', 
        height: '100%', 
        width: '74%', 
        borderBottomColor: 'white', 
        borderBottomWidth: 1, 
        //textAlign: 'right',
        //backgroundColor:"green"
    },
    pass:{ 
        width: '80%', 
        height: 30, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 28,
        //backgroundColor:"red"
    },
    inputP:{ 
        color: 'white', 
        height: '100%', 
        width: '74%', 
        borderBottomColor: 'white', 
        borderBottomWidth: 1, 
        //textAlign: 'right', 
        paddingRight: 40,
        //backgroundColor:"green"
    },
    Btn:{ 
        width: '100%', 
        height: '20%', 
        marginTop: 0.15 * windowHeight, 
        justifyContent: 'center', 
        alignItems: 'center',
        //backgroundColor:"black"
    },
    // btnLogin:{ 
    //     width: '60%', 
    //     height: '30%', 
    //     borderColor: 'white', 
    //     borderWidth: 1, 
    //     borderRadius: 100, 
    //     backgroundColor: '#18A2EB', 
    //     justifyContent: 'center', 
    //     alignItems: 'center',
    // },
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