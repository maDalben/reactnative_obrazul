import React, { Component } from 'react';
import { View, Text, Image as ReactImage, TouchableHighlight } from 'react-native';


//----------  Classe responsável por definir como os produtos aparecerão na tela ----------//

export class ResultItem extends Component{
    render(){
        return(
            <TouchableHighlight style={{
                width: 150,
                height: 200,
                backgroundColor: "white",
                margin: 10,
                borderColor: "#007acc",
                borderWidth: 4,
                borderRadius: 5
            }}>

            <View style={{
                flex: 1
            }}>
                <ReactImage source={{
                    uri: this.props.data.picture
                }}
                    resizeMode={"contain"}
                    style={{
                        flex: 1
                    }}/>

                    <Text style={{
                        textAlign: "center",
                        fontSize: 14
                    }}>
                        {this.props.data.name}
                    </Text>

                    <Text style={{
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>R$ {this.props.data.price}
                    </Text>
            </View>
            </TouchableHighlight>
        )
    }
}
