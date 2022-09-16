import React, { Component } from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';

import styles from "./styles";
import api from "../../services/api";

    export default class Box extends Component {
        state = {
            box: {}
        };

            async componentDidMount() {
                const box = await AsyncStorage.getItem("@RocketBox:box");
                const response = await api.get(
                    `/boxes/${box}`
                );
                    this.setState({
                        box: response.data
                    });
            }
            renderItem = ({ item }) => (
                <TouchableOpacity
                    onPress={ () => {} }
                    style={ styles.file }
                >
                    <View
                        style={ styles.fileInfo }
                    >
                        <Icon
                            name="insert-drive-file"
                            size={24}
                            color="#A5CFFF"
                        />
                            <Text
                                style={ styles.fileTitle }
                            >
                                {item.title}
                            </Text>
                    </View>
                        <Text
                            style={ styles.fileDate }
                        >
                            há {distanceInWords(item.createdAt, new Date(), {locale: pt})}
                        </Text>
                </TouchableOpacity>
            );

                render() { 
                    return (
                        <SafeAreaView
                            style={ styles.container }
                        >
                            <Text
                                style={ styles.boxTitle }
                            >
                                {this.state.box.title}
                            </Text>
                                <FlatList
                                    style={ styles.list }
                                    keyExtractor={file =>
                                        file._id
                                    }
                                    data={this.state.box.files}
                                    ItemSeparatorComponent={ () =>
                                        <View
                                            style={ styles.separator }
                                        />
                                    }
                                    renderItem={ this.renderItem }
                                />
                                    <TouchableOpacity
                                        onPress={ () => {} }
                                        style={ styles.fab }
                                    >
                                        <Icon
                                            name="cloud-upload"
                                            size={24}
                                            color="#FFFFFF"
                                        />
                                    </TouchableOpacity>
                        </SafeAreaView>
                    );
                }
    };