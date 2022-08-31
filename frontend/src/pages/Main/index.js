import React, {Component} from 'react';

import logo from '../../assets/logo.svg';
import './styles.css';

    export default class Main extends Component {
        render() {
            return (
                <div id="main_container">
                    <form>
                        <img src={logo} alt="RocketBox"/>
                            <input type="text" placeholder="criar box de arquivos"/>
                                <button type="Submit">Criar Box</button>
                    </form>
                </div>
            );
        }
    }