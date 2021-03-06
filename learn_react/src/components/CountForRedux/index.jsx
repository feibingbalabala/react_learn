import React from "react";
import store from "./redux/store";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "./redux/count_action"
class CountForRedux extends React.Component {
    state = { count: 0 }

    componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch(createIncrementAsyncAction(value * 1, 1000))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>当前求和：{ store.getState() }</h2>
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
export default CountForRedux
