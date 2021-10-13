import React from "react";
import CountContainer from './containers/index'
import store from "./redux/store";

class CountForReactRedux extends React.Component {
    render() {
        return (
            <CountContainer store={store} />
        )
    }
}
export default CountForReactRedux
