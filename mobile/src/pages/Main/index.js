import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import logo from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

    export default class Main extends Component {
        state = {
            newBox: ""
        };

            async componentDidMount() {
                const box = await AsyncStorage.getItem("@RocketBox:box");   
                    if(box) {
                        this.props.navigation.navigate("Box");
                    }
            }
            handleSignIn = async () => {
                const response = await api.post(
                    "/boxes",
                        {
                            title: this.state.newBox
                        }
                );
                    await AsyncStorage.setItem("@RocketBox:box", response.data._id);
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