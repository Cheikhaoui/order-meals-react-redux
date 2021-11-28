import { useSelector } from 'react-redux';
import cartSlice from '../../store/cart-slice';
import uiSlice from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

    const items = useSelector(state=>state.cart.items);

    const cartItems = items.filter(item=>item.quantity>0).
    map(item=> {return <CartItem {...item}/>});

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {cartItems}
      </ul>
    </Card>
  );
};

export default Cart;
