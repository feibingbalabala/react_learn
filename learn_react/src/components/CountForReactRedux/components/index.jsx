import React from "react";

class CountUi extends React.Component {
    
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsgnc(value * 1, 500)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>当前求和：{this.props.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为奇数在加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
export default CountUi
