import CountUi from '../components/index'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../redux/count_action"
// mapStateToProps函数的返回的是一个对象
// mapStateToProps函数的返回的对象key传递给ui组件props的key，value就作为传递给ui组件的props的value--状态
// 用于传递状态
function mapStateToProps(state) {
    return {
        count: state
    }
}
// mapDispatchToProps函数的返回的是一个对象
// mapDispatchToProps函数的返回的对象key传递给ui组件props的key，value就作为传递给ui组件的props的value--状态
// 用于操作状态
function mapDispatchToProps(dispatch) {
    return {
        jia: (number) => {
            dispatch(createIncrementAction(number))
        },
        jian: (number) => {
            dispatch(createDecrementAction(number))
        },
        jiaAsgnc: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        },
    }
}
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUi)
// 方法2
// const CountContainer = connect(
//     state => ({
//         count: state
//     }), {
//         jia: createIncrementAction,
//         jian: createDecrementAction,
//         jiaAsgnc: createIncrementAsyncAction
//     }
// )(CountUi)
export default CountContainer