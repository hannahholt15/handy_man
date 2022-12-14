import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Workers from './components/workers/Workers';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Team from './components/shared/Team';
const App = () => (
  <>
    <MainNavbar/>
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/Team' element={<Team />} />
      <Route path='/workers' element={<Workers />} />

      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;