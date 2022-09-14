import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import logo from '../../assets/logo.png';
import styles from "./styles";
import api from "../../services/api";

    export default class Main extends Component {
        state = {
            newBox: ''
        };

            handleSignIn = async () => {
                const response = await api.post(
                    '/boxes',
                        {
                            title: this.state.newBox
                        }
                );
                    this.props.navigation.navigate("Box");
            };

                render() { 
                    return (
                        <View
                            style={ styles.container }
                        >
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
                                    value={ this.state.newBox }
                                    onChangeText={ text => this.setState({
                                        newBox: text
                                    }) }
                                />
                                    <TouchableOpacity
                                        onPress={ this.handleSignIn }
                                        style={ styles.button }
                                    >
                                        <Text 
                                            style={ styles.buttonText }
                                        >
                                            Criar Box
                                        </Text>
                                    </TouchableOpacity>
                        </View>
                    );
                }
    };