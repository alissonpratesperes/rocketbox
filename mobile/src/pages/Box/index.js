import React, { Component } from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import {distanceInWords} from "date-fns";
import pt from "date-fns/locale/pt";
import * as ImagePicker from "expo-image-picker";
import socket from "socket.io-client";

import styles from "./styles";
import api from "../../services/api";

    export default class Box extends Component {
        state = {
            box: {}
        };

            async componentDidMount() {
                this.subscribeToNewFiles();
                    const box = await AsyncStorage.getItem("@RocketBox:box");
                    const response = await api.get(
                        `/boxes/${box}`
                    );
                        this.setState({
                            box: response.data
                        });
            };
            subscribeToNewFiles = async () => {
                const box = await AsyncStorage.getItem("@RocketBox:box");
                const io = socket(
                    'http://192.168.1.101:3333'
                );
                    io.emit(
                        'connectRoom',
                            box
                    );
                        io.on(
                            "file",
                                data => {
                                    this.setState({
                                        box: {
                                            ...this.state.box,
                                                files: [
                                                    data,
                                                        ...this.state.box.files
                                                ]
                                        }
                                    });
                                }
                        );
            };
            handleUpload = async () => {
                let uploadFile = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images
                });

                    if(uploadFile.cancelled) {
                        return;
                    } else {
                        let prefix;
                        let ext;

                            if(uploadFile.fileName) {
                                [ prefix, suffix ] = uploadFile.fileName.split('.');
                                    ext = suffix.toLowerCase() === "heic" ? "jpg" : suffix;
                            } else {
                                prefix = new Date().getTime();
                                    ext = "jpg";
                            }

                                const uploadData = new FormData();
                        
                                    uploadData.append(
                                        "file", 
                                            {
                                                uri: uploadFile.uri,
                                                    type: uploadFile.type,
                                                        name: `${prefix}.${ext}`
                                            }
                                    );

                                        api.post(
                                            `/boxes/${this.state.box._id}/files`,
                                                uploadData
                                        );

                    }              
            };
            renderItem = ({ item }) => (
                <View
                    style={styles.file}
                >
                    <View
                        style={styles.fileInfo}
                    >
                        <Icon
                            name="insert-drive-file"
                            size={24}
                            color="#A5CFFF"
                        />
                            <Text
                                style={styles.fileTitle}
                            >
                                {item.title}
                            </Text>
                    </View>
                        <Text
                            style={styles.fileDate}
                        >
                            há {
                                distanceInWords(
                                    item.createdAt,
                                        new Date(),
                                            {locale: pt}
                                )
                            }
                        </Text>
                </View>
            );

                render() {
                    return (
                        <SafeAreaView
                            style={styles.container}
                        >
                            <StatusBar barStyle="dark-content"/>
                                <Text
                                    style={styles.boxTitle}
                                >
                                    {this.state.box.title}
                                </Text>
                                    <FlatList
                                        style={styles.list}
                                        keyExtractor={
                                            file =>
                                                file._id
                                        }
                                        data={this.state.box.files}
                                        ItemSeparatorComponent={
                                            () =>
                                                <View
                                                    style={styles.separator}
                                                />
                                        }
                                        renderItem={this.renderItem}
                                    />
                                        <TouchableOpacity
                                            onPress={this.handleUpload}
                                            style={styles.fab}
                                        >
                                            <Icon
                                                name="cloud-upload"
                                                size={24}
                                                color="#FFFFFF"
                                            />
                                        </TouchableOpacity>
                        </SafeAreaView>
                    );
                };
    };