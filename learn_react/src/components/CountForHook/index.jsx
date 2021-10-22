import React from "react";
import ReactDOM from "react-dom";

// 类似组件

// class CountForHook extends React.Component{
//     state = {
//         count: 0,
//         name: 'jwy'
//     }

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

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     render() {
//         return (
//             <div>
//                 <div>{ this.state.count }</div>
//                 <div>{ this.state.name }</div>
//                 <div>
//                     <button onClick={this.add}>add</button>
//                     <button onClick={this.changeName}>changeName</button>
//                     <button onClick={this.unmount}>卸载组件</button>
//                 </div>
//             </div>
//         )
//     }
// }

// 函数式组件

function CountForHook() {
    
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('jwy')

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

    return (
        <div>
            <div>{ count }</div>
            <div>{ name }</div>
            <div>
                <button onClick={add}>add</button>
                <button onClick={changeName}>changeName</button>
                <button onClick={unmount}>卸载组件</button>
            </div>
        </div>
    )
}

export default CountForHook
