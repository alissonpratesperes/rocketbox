import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {MdInsertDriveFile} from 'react-icons/md';
import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

    export default class Box extends Component {
        state = {
            box: {}
        };

            async componentDidMount() {
                const box = this.props.match.params.id;
                const response = await api.get(`/boxes/${box}`);
                    this.setState({
                        box: response.data
                    });
            }
            handleUpload = (files) => {
                    files.forEach((file) => {
                        const box = this.props.match.params.id;
                        const fileData = new FormData();
                            fileData.append('file', file);
                                api.post(`/boxes/${box}/files`, fileData);
                    });
            };

                render() {
                    return (
                        <div id="box_container">
                            <header>
                                <img src={logo} alt="RocketBox"/>
                                    <h1>{this.state.box.title}</h1>
                            </header>
                                <Dropzone onDropAccepted={this.handleUpload}>
                                    {({getRootProps, getInputProps}) => (
                                        <div className="upload" {...getRootProps()}>
                                            <input {...getInputProps()}/>
                                                <p>Arraste arquivos ou clique aqui</p>
                                        </div>
                                    )}
                                </Dropzone>
                                    <ul>
                                        {this.state.box.files && this.state.box.files.map(file => (
                                            <li key={file._id}>
                                                <a className="fileInfo" href={file.url}>
                                                    <MdInsertDriveFile size={24} color="A5CFFF"/>
                                                        <strong>{file.title}</strong>
                                                </a>
                                                    <span>há {distanceInWords(file.createdAt, new Date(), {locale: pt})}</span>
                                            </li>
                                        ))}
                                    </ul>
                        </div>
                    );
                }
    }