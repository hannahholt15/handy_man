import { useEffect, useState } from 'react';

const WorkerForm = ({addWorker, id, first_name, last_name, image, updateWorker, setEdit }) => {
  const [worker, setWorker] = useState ({first_name: '', last_name: '', image: '', })
  
  useEffect( () => {
    if (id) {
      setWorker({first_name, last_name, image,})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
   if (id) {
     updateWorker(id, worker)
     setEdit(false)
    } else {
      addWorker(worker)
   }

    setWorker({ first_name: '', last_name: '', image :'', })

  }

  return (
    <>
    <h1>{id ? "Update" :"Create"}Worker</h1>
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
        name='image'
        value={worker.image}
        onChange={(e) => setWorker({...worker, image: e.target.value })}
        required
      />
      <button type='submit'> Submit </button>
    </form>
  </>
)
}

export default WorkerForm;