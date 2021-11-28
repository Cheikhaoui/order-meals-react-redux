import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const toggleHandler = ()=>{
    dispatch(uiAction.toggle());
  }

  const amount = useSelector(state=>state.cart.itemsCount)

  return (
    <button className={classes.button} onClick ={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amount}</span>
    </button>
  );
};

export default CartButton;
