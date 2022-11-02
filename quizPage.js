import React,{useState,useEffect} from 'react'
import { StyleSheet,
  Text,
  View,
  Button } from 'react-native';
const quizPage = ({navigation}) => {
  const content = 
  [{q:"Who was the first person in space ",o:['Nelson Mandela','Nelson Armstrong','Neil Armstrong','Yuri Gagarin'],a:'Yuri Gagarin'},
  {q:"What is the 7th planet of the solar system?",o:['Uranus','Uranium','Urnan','Nelson Armstrong'],a:'Uranus'},
  {q:"Who invented the light bulb? ",o:['Thomas Edison','Albert Einstein','Enzo Ferrari'],a:'Thomas Edison'},
  {q:"What temperature does water boil at? ",o:["50 degrees Celcius", "150 degrees Celcius","100 degrees Celcius","Nelson Armstrong"],a:'"100 degrees Celcius"'},
  {
    q: "In which country does adding pinnaples on a Pizza is considered a violation of the highest degree?",
    o:[ "Germany","United States", "Italy","Canada"],a: "Italy"
},

{
    q: "The game of Football/Soccer is coming to Rome, but which country does it originate from?",
    o: ["Italy","England","Brazil","Japan"],
    a: "England"
}]
 useEffect(()=>{
    login();
    console.log("done");
 },[])
  const [c,setC] = useState(0);
  const login = async()=>{
    console.log("start");
    const res = await fetch("http:/localhost:5000/users/signin",{
      method:"POST",
      headers:{
        Accept: 'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        Email:"faizanjvd54@gmial.com",
        Password:"12345"
      }),
      credentials: "include",
    });
    const data = await res.json();
    console.log("res",data);
    alert(data.msg);
  }
  return (
    <View style={styles.mycontainer}>
      <View>


      {/* {content.map(element=>{
          return (
            <View key={element.q}>
              <Text style={styles.mytext}>{element.q}</Text>
              <View style={styles.myseccontainer}>
              {element.o.map(option=>{
                return(
                <Button style={{}} title={option} onPress={()=>{if(option==element.a){setC(c+1)}}}></Button>
                );
                
              })}
            </View>
            </View>
          )
        })}
        <Text style={styles.mytext}> Results Are : {c}</Text> */}
      </View>
        <Button title='go Home' onPress={()=>{navigation.navigate('Home')}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  mytext:{
    fontSize:50,
    color:'white'
  },
  mycontainer:{
      backgroundColor: '#2F2F4F'
  },
  myseccontainer:{
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignContent:' center',
      alignSelf:'center',
      width:"20%",
      fontSize:20
  },
  mybtncontainer:{
    
    backgroundColor:'black',
    width:100
  },
  mysub:{
    color:'white',
    paddingLeft:60,
    paddingTop:5
  },
  quizbtn:{
    backgroundColor:'Black',
    width:'fit-content'
    
  }


});
export default quizPage
