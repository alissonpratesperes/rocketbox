import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import logo from '../../assets/logo.png';
import styles from "./styles";

    export default class Main extends Component {
        render() { 
            return (
                <View style={ styles.container }>
                    <Image
                        style={ styles.logo }
                        source={ logo }
                    />
                        <TextInput
                            style={ styles.input }
                            placeholder="criar box de arquivos"
                            placeholderTextColor="#999999"
                            autoCapitalize="none"
                            autoCorrect={ false }
                            underlineColorAndroid="transparent"
                        />
                            <TouchableOpacity
                                onPress={ () => {} }
                                style={ styles.button }
                            >
                                <Text style={ styles.buttonText }>
                                    Criar Box
                                </Text>
                            </TouchableOpacity>
                </View>
            );
        }
    };