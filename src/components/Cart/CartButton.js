import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice"
import { Link } from 'react-router-dom'
import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);


  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Link to="/cart">
      <button className={classes.button} onClick={toggleCartHandler}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
    </Link>
  );
};

export default CartButton;
