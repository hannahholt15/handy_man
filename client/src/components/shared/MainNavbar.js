import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <h2>HandyMan</h2>
      <ul>
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/team'>
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
