
import { useState } from 'react';
import './App.css';

function App() {

const [value, setValue] = useState()  
const [data, setData] = useState([])
const onChange = async (e) => {
  setValue(e.target.value)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data =await response.json()
  setData(data)

}

  return (
    <div className="App">
      <div className="search">
        <div>
          <input type="text" onChange={onChange} value={value}/>
            <button>search</button>
        </div>
        <div className='dropdown-content'>
          {
            data.filter(item => item.title.startsWith (value) && item.title !== value) .slice(0, 5) .map(item => <div key={item.id} onClick={(e) => setValue (item.title)}> 
                {item.title} <hr />
              </div>)
          }
        </div>
      </div>

    </div>
  );
}

export default App;
