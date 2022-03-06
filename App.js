import Login from './screens/Login/Login'
import InputLogin from './screens/Login/InputLogin'
import Register from './screens/Login/Register'
import ForgotPassword from './screens/Login/ForgotPassword'
import Dashboard from './screens/Main/Dashboard'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [mainState, setMainState] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  const [forgotState, setForgotState] = useState(false);

  const handleClose = () => {
    setLoginState(false);
    setRegisterState(false);
    setForgotState(false);
  }

  const handleLogin = () => {
    handleClose();
    setMainState(false);
    setLoginState(true);
  }

  const handleRegister = () => {
    handleClose();
    setMainState(false);
    setRegisterState(true);
  }

  const handleForgot = () => {
    handleClose();
    setForgotState(true);
  }

  const handleSubmit = () => {
    setLoginState(false);
  }
    return (
      <SafeAreaView>
        {(!loginState && mainState) && <Login login={() => handleLogin()} register={() => handleRegister()}/> }
        {loginState && <InputLogin login={() => handleSubmit()} register={() => handleRegister()} forgot={() => handleForgot()}/>}
        {registerState && <Register back={() => handleLogin()}/>}
        {forgotState && <ForgotPassword back={() => handleLogin()}/>}
        {!mainState && !loginState && !registerState && !forgotState ? <Dashboard /> : null}
        <StatusBar />
      </SafeAreaView>
    );
}
