// 1. 该文件用于传建一个为Count组件服务的reducer，reducer的本质是一个函数
// 2. reducer函数会接收两个参数，之前的状态（preState）,动作对象（action）
import { INCREMENT, DECREMENT} from './constant'
const initState = 0
export default function countReducer(perState = initState, action) {
    const { type, data } = action
    switch(type) {
        case INCREMENT:
            return perState + data
        case DECREMENT:
            return perState - data
        default:
            return perState
    }
}
