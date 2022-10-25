import React, {useState,useEffect} from "react";
import {View, Text,FlatList,StyleSheet,TextInput,SafeAreaView} from "react-native";


export default Search = () =>{
    const [filterdData, setfilterdData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetchPosts();
    return () =>{
      
    }
  }, [])

  const fetchPosts = () =>{
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
    .then((response) => response.json())
    .then ((responseJson) => {
      setfilterdData(responseJson);
      setmasterData(responseJson);
    }).catch((error)=>{
      console.error(error);
    })
  }
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ?
                    item.title.toUpperCase(): ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterdData(newData);
      setSearch(text);
    }else{
      setfilterdData(masterData);
      setSearch(text);
    }
  }


  const ItemView = ({item}) => {
    return (
      <Text style={styles.itemStyle}>
        {item.id}{'. '}{item.title.toUpperCase()}
      </Text>
    )
  }
  const ItemSeparatorView = () => {
    return (
      <View
        style={{height: 0.5, width: '100%', backgroundColor: '#eeeeee'}}
      />
    )
  }
    return(
        <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder="Search for..."
          underlineColorAndroid = "transparent"
          onChangeText={(Text) => searchFilter(Text)}
        />
        <View>
          <Text style={{paddingLeft: 15, fontWeight: "600", fontSize: 30}}>
            Search for place
          </Text>
        </View>
        <FlatList
          data = {filterdData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      //marginTop: 50,
      backgroundColor: '#ffffff',
    },
    itemStyle: {
      padding: 15
    },
    textInputStyle:{
      height: 45,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#fff'
    }
  })