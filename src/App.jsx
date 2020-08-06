import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import userReducers from './reducers/user';
import LogInScreen from './components/LogIn/LogInScreen';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/LogIn/RegisterScreen';
import PasswordRecoveryScreen from './components/LogIn/RecoverPasswordScreen';
const Stack = createStackNavigator();

const App = () => {
  const store = createStore(combineReducers({ userReducers }));

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator>
            <Stack.Screen name="LogIn" component={LogInScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="RecoverPassword" component={PasswordRecoveryScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
