import { useState } from 'react';

const WorkerForm = ({addWorker, }) => {
  const [worker, setWorker] = useState ({first_name: '', last_name: '', picture: '', })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  //  if (id) {
  //    updateWorker(id, Worker)
   //   setEdit(false)
   //  } else {
      addWorker(worker)
  //  }

    setWorker({ first_name: '', last_name: '', })

  }

  return (
    <>
    <h1>Topic</h1>
    <form onSubmit={handleSubmit}>
      <label>Worker First Name</label>
      <input
        name='first_name'
        value={worker.first_name}
        onChange={(e) => setWorker({...worker, first_name: e.target.value })}
        required
      />
      <label>Worker Last Name</label>
      <input
        name='last_name'
        value={worker.last_name}
        onChange={(e) => setWorker({...worker, last_name: e.target.value })}
        required
      />
      <label>Picturelink</label>
      <input
        name='picture'
        value={worker.picture}
        onChange={(e) => setWorker({...worker, picture: e.target.value })}
        required
      />
      <button type='submit'> Submit </button>
    </form>
  </>
)
}

export default WorkerForm;