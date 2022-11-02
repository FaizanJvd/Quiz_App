
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homePage from './homePage';
import quizPage from './quizPage';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.txt_color}>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen  name="Home" component={homePage}  options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Quiz" component={quizPage} options={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F2F4F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_color:{
    color:'#FFA500',
    backgroundColor:'black'
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
