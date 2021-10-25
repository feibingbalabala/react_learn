import React from "react";
import ReactDOM from "react-dom";

// 类似组件

// class CountForHook extends React.Component{
//     state = {
//         count: 0,
//         name: 'jwy'
//     }

//     myref = React.createRef();

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState({count: this.state.count + 1})
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     add = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     changeName = () => {
//         if (this.state.name === 'jwy') {
//             this.setState({
//                 name: 'jwy111'
//             })
//         } else {
//             this.setState({
//                 name: 'jwy'
//             })
//         }
//     }

//     show = () => {
//         alert(this.myref.current.value);
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>类式组件</h1>
//                 <input type="text" ref={this.myref} />
//                 <div>{ this.state.count }</div>
//                 <div>{ this.state.name }</div>
//                 <div>
//                     <button onClick={this.add}>add</button>
//                     <button onClick={this.changeName}>changeName</button>
//                     <button onClick={this.unmount}>卸载组件</button>
//                     <button onClick={this.show}>点击提示数据</button>
//                 </div>
//             </div>
//         )
//     }
// }

// 函数式组件

function CountForHook() {
    
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('jwy')
    const myref = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])
    
    function add() {
        // 方法1
        setCount(count + 1)
        // 方法2
        // setCount(() => count + 1)
    }

    function changeName() {
        if (name === 'jwy') {
            setName('jwy111')
        } else {
            setName('jwy')
        }
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show () {
        alert(myref.current.value)
    }

    return (
        <div>
            <h1>函数式组件</h1>
            <input type="text" ref={myref} />
            <div>{ count }</div>
            <div>{ name }</div>
            <div>
                <button onClick={add}>add</button>
                <button onClick={changeName}>changeName</button>
                <button onClick={unmount}>卸载组件</button>
                <button onClick={show}>点击提示数据</button>
            </div>
        </div>
    )
}

export default CountForHook
