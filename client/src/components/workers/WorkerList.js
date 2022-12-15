import WorkerShow from './WorkerShow'

const WorkerList = ({workers, deleteWorker,updateWorker}) => ( 
  <>
      { workers.map( w => 
      <WorkerShow
        key={w.id}
        {...w}
        updateWorker={updateWorker}
        deleteWorker={deleteWorker}
       />)
      }
  </>
)
export default WorkerList;