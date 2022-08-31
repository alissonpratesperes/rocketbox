import React, {Component} from 'react';

import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

    export default class Main extends Component {
        state = {
            newBox: ''
        };

            handleInputChange = (event) => {
                this.setState({
                    newBox: event.target.value
                });
            };
            handleSubmit = async (event) => {
                event.preventDefault();
                    const response = await api.post('/boxes', {
                        title: this.state.newBox
                    });
                        console.log(response.data);
            };

                render() {
                    return (
                        <div id="main_container">
                            <form onSubmit={this.handleSubmit}>
                                <img src={logo} alt="RocketBox"/>
                                    <input type="text" placeholder="criar box de arquivos" value={this.state.newBox} onChange={this.handleInputChange}/>
                                        <button type="Submit">Criar Box</button>
                            </form>
                        </div>
                    );
                }
    }