import React from 'react';
import { View, Image as ReactImage} from 'react-native';
import { Component } from 'react';

export class Header extends Component {
    render() {
        return(
            <View style={{
                maxHeight: 50,
                flex: 1,
                backgroundColor: "#1A62D8",
                alignItems: "center"
            }}>
                <ReactImage
                  source={require("./assets/app-logo.png")}
                  style={{
                    width: 200,
                    height: 50
                  }}
                />
              </View>
        )
    }

}
