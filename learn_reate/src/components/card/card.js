import React from "react"
class Card extends React.Component {
  render() {
    const { name, tel, sex, tag } = this.props
    return (
      <div>
        { name }
        <p>
          电话：{ tel }
        </p>
        <p>
          性别：{ sex ? '男' : '女'}
        </p>
        <ul>
          {
            tag.forEach((item, index) => {
              return <li key={index}>{ item }</li>
            })
          }
        </ul>
      </div>
    )
  }
}
// function Card(props) {
//   const { name, tel, sex, tag } = props
//   return (
//     <div>
//       { name }
//       <p>
//         电话：{ tel }
//       </p>
//       <p>
//         性别：{ sex ? '男' : '女'}
//       </p>
//       <ul>
//         {
//           tag.forEach((item, index) => {
//             return <li key={index}>{ item }</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }
export default Card
