import React from "react";

// 类似组件

// class CountForHook extends React.Component{
//     state = {
//         count: 0
//     }

//     add = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div>{ this.state.count }</div>
//                 <div>
//                     <button onClick={this.add}>add</button>
//                 </div>
//             </div>
//         )
//     }
// }

// 函数式组件

function CountForHook() {
    
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('jwy')

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

    return (
        <div>
            <div>{ count }</div>
            <div>{ name }</div>
            <div>
                <button onClick={add}>add</button>
                <button onClick={changeName}>changeName</button>
            </div>
        </div>
    )
}

export default CountForHook
