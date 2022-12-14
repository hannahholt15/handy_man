import { useState, useEffect } from "react";
import axios from "axios";
const Workers = () => {

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

} 
export default Workers
