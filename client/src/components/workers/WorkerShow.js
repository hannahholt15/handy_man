import { useState } from 'react';
import WorkerForm from './WorkerForm';


const WorkerShow = ({id, first_name, last_name, image, updateWorker, deleteWorker}) => {
const [editing, setEdit] = useState (false)

return (
  <>
  {
    editing ?
    <>
    <WorkerForm
    id={id}
    first_name ={first_name}
    last_name ={last_name}
    image ={image}
    updateWorker ={updateWorker}
    setEdit ={setEdit}
    />
    <button onClick={()=> setEdit(false)}>
      Cancel
    </button>
    </>
    :
    <>
    <h1>{first_name}</h1>
    <h3>{last_name}</h3>
    <h4>{image}</h4>
    <button 
    onClick={()=> setEdit(true)}>
      Edit?
    </button>
    <button onClick={()=> deleteWorker(id)}>
      Delete?!
      </button>
    </>
  }
  </>
)
}
export default WorkerShow; 