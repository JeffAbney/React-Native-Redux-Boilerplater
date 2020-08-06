/* eslint-disable react/prop-types */
import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Button, Form, Item, Input } from 'native-base';
import { useForm, Controller } from "react-hook-form";
import { logIn } from '../../actions/index';
import verifyCredentials from '../../api/verifyCredentials';


function LogInScreen({ navigation }) {
  const user = useSelector((state) => state.userReducers.user);
  const dispatch = useDispatch();
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log('some data', data);

  function onLoginButtonPress(data) {
    console.log('pressed log in');
    verifyCredentials(data.email, data.password)
      .then((response) => {
        dispatch(logIn(response))
        return response
      })
    .then((response) => {
        if (response) {
          navigation.navigate('Home')
        }
    })
  }

  return (
    <Container>
      <Content>
        <Form>
          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Email"
              />
            )}
            name="email"
            rules={{
              required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }}
            defaultValue=""
          />
          {errors.email && errors.email.type === "required" && <Text>"Your input is required"</Text>}
          {errors.email && errors.email.type === "pattern" && <Text>"Please use a correctly formatted email address"</Text>}

          <Controller
            control={control}
            render={({ onChange, onBlur, value }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                placeholder="Password"
              />
            )}
            name="password"
            rules={{ required: true, minLength: 6, maxLength: 20 }}
            defaultValue=""
          />
          {errors.password && errors.password.type === "required" && <Text>"Your input is required"</Text>}
          {errors.password && errors.password.type === "minLength" && <Text>"Your password is too short."</Text>}
          {errors.password && errors.password.type === "maxLength" && <Text>"Your password is too long"</Text>}

          < Button full onPress={handleSubmit(onLoginButtonPress)} >
            <Text>Log In</Text>
          </Button>
        </Form>

        <Button full onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </Button>

        <Button full onPress={() => navigation.navigate('RecoverPassword')}>
          <Text>Forgot your password?</Text>
        </Button>
      </Content>
    </Container >
  );
}

export default LogInScreen;
