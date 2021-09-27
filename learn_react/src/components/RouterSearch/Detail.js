import React from "react";
import qs from "querystring"
const DetailData = [
    {
        id: '1',
        content: "内容1"
    },
    {
        id: '2',
        content: "内容2"
    },
    {
        id: '3',
        content: "内容3"
    }
]
class Detail extends React.Component{
    render() {
        console.log(this.props)
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1))
        const findResult = DetailData.find((dataObj) => {
            return dataObj.id === id
        })
        return (
            <div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>content: {findResult.content}</div>
            </div>
        )
    }
}

export default Detail
