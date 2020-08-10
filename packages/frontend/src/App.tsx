import React, {Component} from 'react';
import AppUploader from "./components/uploader";
import {Layout} from "antd";
import './App.scss';
import appStore from "./store/app.store";
import {BasicProps} from "antd/lib/layout/layout";


export default class App extends Component {
    state = {
        status: 'none'
    };

    componentDidMount() {
        appStore.subscribe(() => {
            const {status} = appStore.getState();

            this.setState({status});
        })
    }

    render() {
        const props: BasicProps = {
            style: {
                padding: '24px'
            },
            className: (() => this.state.status)()
        };

        return (
            <Layout {...props}>
                <h1>File Uploader</h1>
                <AppUploader/>
            </Layout>
        );
    }
}
