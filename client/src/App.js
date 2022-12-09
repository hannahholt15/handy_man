import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/worker' element={<Lists />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)
// const App = () => {
//   return (

//   )
// }

export default App;
