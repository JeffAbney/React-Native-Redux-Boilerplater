import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../actions/index';
import { Container, Content, Button } from 'native-base';

export default function RecoverPasswordScreen({ navigation }) {
    const dispatch = useDispatch();

    return (
        <Container>
            <Content>
                <Text>Password Recovery Screen</Text>
            </Content>
        </Container>
    )
}
