import React from "react";
import { Link, Route } from 'react-router-dom'
import PageA from "./PageA";
import PageB from "./PageB";
import './index.css'

class ReactRouterDomDemo extends React.Component {
    render() {
        return (
            <div>
                <div className="link_wrap">
                    <Link className="link" to="/pagea">PageA</Link>
                    <Link className="link" to="/pageb">PageB</Link>
                </div>
                <div className="content">
                    {/* 注册路由 */}
                    <Route path="/pagea" component={PageA} />
                    <Route path="/pageb" component={PageB} />
                </div>
            </div>
        )
    }
}

export default ReactRouterDomDemo