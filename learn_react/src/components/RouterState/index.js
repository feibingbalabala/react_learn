import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class RouterState extends React.Component{
    state = {
        msgArr: [
            {
                id: "1",
                title: "文章1"
            },
            {
                id: "2",
                title: "文章2"
            },
            {
                id: "3",
                title: "文章3"
            }
        ]
    }
    render() {
        const { msgArr } = this.state
        return (
            <div>
                <h2>注意关注url</h2>
                <ul>
                    {
                        msgArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* state传递 */}
                                    <Link to={{
                                        pathname: "/routerstate/detail",
                                        state: {
                                            id: msgObj.id,
                                            title: msgObj.title
                                        }
                                    }}>{ msgObj.title }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path="/routerstate/detail" component={Detail} />
            </div>
        )
    }
}
export default RouterState