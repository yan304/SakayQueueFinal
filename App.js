import Login from './screens/Login/Login'
import InputLogin from './screens/Login/InputLogin'
import Register from './screens/Login/Register'
import ForgotPassword from './screens/Login/ForgotPassword'
import Dashboard from './screens/Main/Dashboard'
import Conductor from './screens/Conductor/Conductor'
// import Dashboard from './screens/Main/Dashboard'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [mainState, setMainState] = useState(true);
  const [loginState, setLoginState] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  const [forgotState, setForgotState] = useState(false);
  const [currentRole, setCurrentRole] = useState("customer");

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

  const handleSubmit = (e) => {
    setCurrentRole(e);
    setLoginState(false);
  }

  const handleCurrentUser = (e) => {
    handleClose();
    setCurrentRole(e);
    setMainState(false);
    setLoginState(false);
  }

  const handleLogout = () => {
    setCurrentRole('');
    setMainState(true);
  }
    return (
      <SafeAreaView>
        {(!loginState && mainState) && <Login dashboard={(e) => handleCurrentUser(e)} login={() => handleLogin()} register={() => handleRegister()}/> }
        {loginState && <InputLogin login={(e) => handleSubmit(e)} register={() => handleRegister()} forgot={() => handleForgot()}/>}
        {registerState && <Register back={() => handleLogin()}/>}
        {forgotState && <ForgotPassword back={() => handleLogin()}/>}
        {!mainState && !loginState && !registerState && !forgotState && currentRole === "admin" ? <Conductor back={() => handleLogout()} /> : null}
        {!mainState && !loginState && !registerState && !forgotState && currentRole === "conductor" ? <Conductor back={() => handleLogout()} /> : null}
        {!mainState && !loginState && !registerState && !forgotState && currentRole === "customer" ? <Dashboard back={() => handleLogout()} /> : null}
        <StatusBar />
      </SafeAreaView>
    );
}
