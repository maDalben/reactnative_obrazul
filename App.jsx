import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { styles } from './styles';
import { Component } from 'react';
import { Header } from './header';
import { SearchBar } from './searchbar';
import { ResultsContainer } from './results-container';

//---------- Função principal ----------//

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "white",
    }}>
      <StatusBar style="light" backgroundColor="#1A62D8" />

      <Header/>

      <View style={{
        flex: 1,
        padding: 6
      }}>

      <SearchBar />

      <ResultsContainer />

      </View>
    </View>
  );
}

