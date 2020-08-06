import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../actions/index';
import { Container, Content, Button } from 'native-base';

export default function RegisterScreen({ navigation }) {
  const dispatch = useDispatch();

  return(
    <Container>
      <Content>
        <Text>Registration Screen</Text>
      </Content>
    </Container>
  )
}
