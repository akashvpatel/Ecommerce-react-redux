import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { Link } from 'react-router-dom'
import Products from '../Shop/Products';
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <Link to="/" style={{ textDecoration: 'none' }} element={<Products />}><h1>🖥️Courses</h1></Link>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
