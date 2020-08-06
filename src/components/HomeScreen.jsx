import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'native-base';

export default function HomeScreen() {
  const user = useSelector((state) => state.userReducers);
  console.log('HomeScreen user -', user);
  return (
    user === undefined
      ? (
        <Container>
          <Text>Hello, Guest!</Text>
        </Container>
      )
      : (
        <Container>
          <Text>Hello, {user.profile.name}!</Text>
        </Container>
      )
  )

}