import React, {Component} from 'react';
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


            render() {
                return (
                    <div id="box_container">
                        <header>
                            <img src={logo} alt="RocketBox"/>
                                <h1>{this.state.box.title}</h1>
                        </header>
                            <ul>
                                {this.state.box.files && this.state.box.files.map(file => (
                                    <li>
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