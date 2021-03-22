import React from 'react';
import { View, Image as ReactImage, Text, ScrollView, ActivityIndicator } from 'react-native';
import { ResultItem } from './result.item';

import { Component } from 'react';
import { SearchBar } from './searchbar';

//---------- Container que irá renderizar os produtos procurados e exibi-los ---------- //

export class ResultsContainer extends Component{
    static instance;

    state = {
        items: [],
        isLoading: false,
        error: null
    }

    constructor( props ){
        super( props );
        ResultsContainer.instance = this;
    }

    getSearchResults(search){
        this.setState({
            items: [],
            isLoading: true
        });

        fetch(`https://obrazul.com.br/api/recruitment/products/?search=${search}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    items: result.products,
                    isLoading: false
                });
            })
            .catch(e => {
                this.setState({
                    items: [],
                    isLoading: false,
                    error: `Não foi possível realizar a busca. \nTente novamente mais tarde.\n\n${e}`
                })
            } );
    }

    render(){
        let subtitle = "";

        if (this.state.isLoading == false && SearchBar.instance.searchValue) {
            subtitle = this.state.items.length == 0 ? `Nenhum resultado encontrado` : `${this.state.items.length} resultado(s)`;
        }

        if (this.state.error){
            subtitle = this.state.error;
        }

        return(
            <View style={{
                flex: 1
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 16,
                }}>
                    {subtitle}
                </Text>

                <ScrollView style={{
                    flex: 1
                }}
                contentContainerStyle={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                {
                    this.state.isLoading ? <ActivityIndicator color={"blue"} size={"large"} /> : null
                }

                {
                    this.state.items.map((item, i) => {
                        return <ResultItem data={item} key={`ResultItem-${i}`} />
                    })
                }
                </ScrollView>
            </View>
        )
    }
}
