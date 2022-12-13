import { useState, useEffect } from 'react';
import axios from 'axios';

const Workers = () =>
{

  const addWorker = (worker) => {
    axios.post('/api/workers', { worker })
      .then( res => setWorkers([...workers, res.data]))
      .catch( err => console.log(err))
  }

} 
export default Workers
