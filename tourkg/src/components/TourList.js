import TourItem from './TourItem'
import {useState, useEffect} from 'react' 
import axios from 'axios';

export default function TourList () {
  const [tours, setTours] = useState([]);

  function getData(){
  //   fetch("https://jsonplaceholder.typicode.com/todos/")
  // .then(response => response.json())
  // .then(info => {
  //   setTours(info)
  // })

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => setTours(response.data))
  }
  useEffect(getData,[])

  function items(element, index) {
    return <TourItem key={index} tourName={element.title}/>
  }


  return (
    <div >
      <h2>Список туров:</h2>
      <ul>
        {tours.map(items)}
      </ul>
    </div>
  )
}