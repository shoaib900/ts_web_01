import Child from "./components/Child"
import img1 from "./assets/123.png"

const App = () => {
  var name = "adil"
  var age = 22
  return (
    <div>
      <h1 style={{backgroundColor:"red"}}>hello world </h1>
      <h2>my name is {name} and my age is {age} </h2>
      <img src={img1} width={200} alt="" />
      <div>
        {4 + 4}
      </div>

      <Child />
      
    </div>
  )
}

export default App
