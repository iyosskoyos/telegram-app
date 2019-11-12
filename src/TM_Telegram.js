/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import TdLibController from './Controllers/TdLibController';
const phone="+628562007080";

class TM_Telegram extends Component {
    constructor(props) {
        super(props);
        console.log(`TM Authorizing Telegram`);

        this.state = {
            loading: true
        };
        this.checkInterval=false;
    }

    componentDidMount() {
        const { location } = this.props;
        TdLibController.init(location);
        TdLibController.clientUpdate({
            '@type': 'clientUpdateSetPhone',
            phone : phone
        });
        TdLibController.send({
            '@type': 'setAuthenticationPhoneNumber',
            phone_number: phone
        });
        this.checkInterval=setTimeout(function(){
            console.log("listening to text file containing codes");
        },60000);
    }

    componentWillUnmount() {
        clearTimeout(this.checkInterval);
    }

    render() {
        return (
            <div id='splashScreen' style={style.splashScreen}>
                <div style={style.splashLogo}>
                    <img src='https://modular-economy.id/asset/img/LogoME-square.png' width={200}/><br/><br/>
                    Initializing Dashboard ...
                </div>
            </div>
        );
    }
}
var style={
    splashScreen:{
        textAlign:"center",
        position: "relative",
        height:"100vh"
    },
    splashLogo:{
        margin:"0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
}
export default TM_Telegram;
