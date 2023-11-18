import './App.css';
import elephant from "./images/elephant.jpeg";

 const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const imgarr = imageData()
  // code here
  return(
    <>
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='mainBody'>
        {imgarr.map((item) => {
          return <img src={item.img} alt= {item.id}key={item.id} />
        })}
        </div>
      </div>
    </>
  )
}

export default App;
