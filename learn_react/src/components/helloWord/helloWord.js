const arr = ['a', 'b', 'c']
function helloWord() {
  return (
    <div>
      hello word
      <ul>
        {
          arr.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
export default helloWord;
