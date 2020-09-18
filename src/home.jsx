import React from "react";
import Modal from "./modal"
import "./home.css"
// protal入口，将react元素挂载到任意真实的Dom元素上
// 使用场景：模态框，弹出层，加载器，进度条 等等

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            showModal:false
        }
    }
    render(){
        let {showModal} = this.state;
        let ModelEl = showModal?( <Modal>
                                    <div className="modal">
                                        <h3>你确定要提交吗？</h3>
                                        <button onClick={()=>{this.setState({showModal:false})}}>点击关闭模态框</button>
                                    </div>
                                </Modal>) :null
        return (
            <fieldset>
                <legend>Home组件</legend>
                <div className="container" style={{color:"#111",border:"1px solid green"}}>
                    <h3>顶部栏</h3>
                    <div className="main">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime quaerat laborum, 
                        esse sed quam quas sequi recusandae dicta
                        excepturi natus reprehenderit dolorem
                        pariatur officiis, reiciendis sunt a nulla. 
                        Velit, quas?
                    </div>
                    <button onClick={ ()=>{ this.setState( {showModal:true} ) } }>点击打开模态框</button>
                </div>
                   {ModelEl}
            </fieldset>
        )
    }
}
export default Home