import React from "react";
import { Link, Route } from "react-router-dom";
import FirstPage from "./First";
import SecondPage from "./Second";

class SecondaryRouting extends React.Component {
    render() {
        return (
            <div>
                <h2>index组件</h2>
                <div>
                    <Link to="/secondaryrouting/first" >first</Link>
                </div>
                <div>
                    <Link to="/secondaryrouting/second" >second</Link>
                </div>
                <h2>二级路由组件</h2>
                <div>
                    <Route path="/secondaryrouting/first" component={FirstPage} />
                    <Route path="/secondaryrouting/second" component={SecondPage} />
                </div>
            </div>
        )
    }
}

export default SecondaryRouting
