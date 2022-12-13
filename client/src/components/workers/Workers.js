import { useState, useEffect } from 'react';
import axios from 'axios';
import WorkerForm from './WorkerForm';
const Workers = () => {
  const [workers, setWorkers] = useState ([])

  useEffect ( () => {
    axios.get('/api/Worker')
    .then( res => setWorkers(res.data))
    .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

  return (
   <>
   <WorkerForm addWorker={addWorker}/>
   <h1>
    Workers
   </h1>
   </> 
  )
}
export default Workers;
