import React from 'react';
import { StyleSheet, Text, View, StatusBar,TextInput } from 'react-native';
import { styles } from './styles';
import { Component } from 'react';
import { Header } from './header';


export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#babaca",
    }}>
      <StatusBar style="light" backgroundColor="#1A62D8" />

      <Header/>

      <TextInput
        placeholder={"Busque seu produto"}
        style={{
          backgroundColor: "white",
          flex: 1,
          maxHeight: 40,
          padding: 6
        }}
      />

      <View style={{
        flex: 1,
        padding: 6
      }}>
      </View>

    </View>
  );
}

