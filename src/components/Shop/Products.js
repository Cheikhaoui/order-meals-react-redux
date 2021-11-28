import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const items = useSelector(state => state.cart.items)
  const showItems = items.filter(item=>item.quantity==0).map(item=>{
    return <ProductItem
    {...item}
  />
  })
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {showItems}
      </ul>
    </section>
  );
};

export default Products;
