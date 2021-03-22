import React from 'react';
import { View, TextInput, Button, Image as ReactImage } from 'react-native';

import { Component } from 'react';
import { ResultsContainer } from './results-container';

//---------- Definição da barra de busca de produtos ----------//

export class SearchBar extends Component {
    static instance;

    state = {
        searchValue: ""
    }

    constructor( props ){
        super( props );

        this.searchCallback = this.searchCallback.bind( this );

        SearchBar.instance = this;
    }


    searchCallback() {
        ResultsContainer.instance.getSearchResults(this.state.searchValue);
    }

    render(){
        return (
            <View style={{
                flex: 1,
                maxHeight: 40,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 6
            }}>
                <TextInput
                    placeholder={"Busque seu produto"}
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      padding: 6,
                    }}

                    value={this.state.searchValue}

                    onChangeText={
                        ( value ) => {
                            this.setState({
                                searchValue: value
                            });
                        }
                    }
                    onSubmitEditing={this.searchCallback}
                  />

                  <View style={{
                      width: 40,
                      paddingLeft: 6,
                  }}>
                      <Button
                        title={"🔍"}
                        onPress={this.searchCallback}/>
                  </View>
            </View>
        )
    }
}
