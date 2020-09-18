import React from "react";
import ReactDom from "react-dom"
import "./modal.css"

class Modal extends React.Component{
    constructor(){
        super()
        this.modalRoot = document.createElement("div");//创建div元素
        this.modalRoot.id = "modal-root";//添加个id名

    }
    componentDidMount(){
        // 将dom元素添加到body
        document.body.appendChild(this.modalRoot)
    }
    componentWillUnmount(){
        document.body.removeChild(this.modalRoot)
    }
    render(){
        return ReactDom.createPortal(this.props.children,this.modalRoot)
    }
}
export default Modal