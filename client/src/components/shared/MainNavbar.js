import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <h2>HandyMan</h2>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/Team'>
          <li>Team</li>
        </Link>
        <Link to='/workers'>
          <li>Workers</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;
