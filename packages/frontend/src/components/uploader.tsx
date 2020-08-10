import React, {Component} from "react";
import {Button, message, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons/lib";
import {UploadProps} from "antd/lib/upload";
import {UploadChangeParam} from "antd/lib/upload/interface";
import appStore from '../store/app.store';


export default class AppUploader extends Component {
    private statusMap: { [key: string]: (param: UploadChangeParam) => void } = {
        uploading: ({file, fileList}) => {
            console.log(file, fileList);
        },
        done: ({file: {name}}) => {
            message.success(`${name} file uploaded successfully`);
        },
        error: ({file: {name}, event}) => {
            message.error(`${name} file upload failed.`);
        }
    };

    render() {
        const props: UploadProps = {
            name: 'files',
            action: 'http://localhost:3001/files',
            multiple: true,
            showUploadList: {
                showDownloadIcon: false
            },

            onChange: (param: UploadChangeParam) => {
                const {
                    file: {status = 'error'},
                    fileList
                } = param;

                this.statusMap[status]?.(param);

                const isLoading = () => fileList.some(({status}) => status === 'uploading');
                const isSuccess = () => fileList.every(({status}) => status === 'done');
                const isError = () => fileList.every(({status}) => status === 'error');
                const isWarn = () => fileList.some(({status}) => status === 'error');

                if (!isLoading() && fileList.length > 0) {  // Are all files have completed state
                    if (isSuccess()) {
                        appStore.dispatch({type: 'HIGHLIGHT_SUCCESS'});
                    } else if (isWarn() && !isError()) {
                        appStore.dispatch({type: 'HIGHLIGHT_WARNING'});
                    } else if (isError()) {
                        appStore.dispatch({type: 'HIGHLIGHT_ERROR'});
                    }
                } else {
                    appStore.dispatch({type: 'HIGHLIGHT_NONE'});
                }
            },

            previewFile: async (file) => {
                console.log('Your upload file:', file);
                // Your process logic. Here we just mock to the same file
                const result = await fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
                    method: 'POST',
                    body: file,
                });

                const {thumbnail} = await result.json()

                return thumbnail;
            },

            progress: {
                strokeColor: {
                    '0%': '#ff0000',
                    '100%': '#00ff00',
                },
                strokeWidth: 3,
                format: (percent = 0) => `${parseFloat(percent.toFixed(2))}%`
            }
        };

        return (
            <Upload {...props} >
                <Button>
                    <UploadOutlined/> Upload
                </Button>
            </Upload>
        );
    }
}