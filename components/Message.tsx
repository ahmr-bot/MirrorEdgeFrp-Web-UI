import { Alert, Snackbar } from "@mui/material";
import React from "react";
import ReactDOM from 'react-dom';
function Message(props) {
    const { content, duration, type }:any = {...props};
    // 开关控制：默认true,调用时会直接打开
    const [open, setOpen] = React.useState(true);
    // 关闭消息提示
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    return <Snackbar
        open={open}
        autoHideDuration={duration}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}>
            <Alert severity={type}>{content}</Alert>
        </Snackbar>
}

const message = {
    dom: null,
    success({content, duration}) {
        if (typeof window !== 'undefined') {
        // 创建一个dom
        this.dom = document.createElement('div');
        // 定义组件， 
        const JSXdom = (<Message content={content} duration={duration} type='success'></Message>);
        // 渲染DOM
        ReactDOM.render(JSXdom,this.dom)
        // 置入到body节点下
        document.body.appendChild(this.dom);
        }
    },
    error({content, duration}) {
        if (typeof window !== 'undefined') {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='error'></Message>);
        ReactDOM.render(JSXdom,this.dom)
        document.body.appendChild(this.dom);
        }
    },
    warning({content, duration}) {
        if (typeof window !== 'undefined') {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='warning'></Message>);
        ReactDOM.render(JSXdom,this.dom)
        document.body.appendChild(this.dom);
        }
    },
    info({content, duration}) {
        if (typeof window !== 'undefined') {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='warning'></Message>);
        ReactDOM.render(JSXdom,this.dom)
        document.body.appendChild(this.dom);
        }
    }
};
 
export default message;