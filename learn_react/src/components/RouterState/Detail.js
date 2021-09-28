import React from "react";
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
        const { id, title } = this.props.location.state || {}
        const findResult = DetailData.find((dataObj) => {
            return dataObj.id === id
        }) || {}
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
