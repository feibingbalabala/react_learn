import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

class RouterParams extends React.Component{
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
                                    {/* params传递 */}
                                    <Link to={`/routerparams/detail/${msgObj.id}/${msgObj.title}`}>{ msgObj.title }</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route path="/routerparams/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
export default RouterParams