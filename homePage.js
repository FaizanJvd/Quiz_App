import React from 'react'
import { StyleSheet, Text, View,Image,Button } from 'react-native';
const homePage = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/quiz.png')}></Image>
      <Text style={styles.txt_color}>Welcome to Quiz App</Text>
      <Button style={styles.btn_start} title='Start Quiz' onPress={() =>{
        navigation.navigate('Quiz')
      }}/>
      <input type='text' />
    </View>
    // 
  )
}

export default homePage
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2F2F4F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt_color:{
      color:'#FFA500',
      fontSize:24,
      fontFamily:'Times',
      marginTop:20
    },
    logo: {
      width: 200,
      height: 200,
  },
  btn_start:{
    height:40,
    width:40,
    marginTop:20
  }
  });
  
