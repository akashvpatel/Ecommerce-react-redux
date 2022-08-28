import Courses from '../Layout/Courses';
import ProductItem from './ProductItem';
import classes from './Products.module.css';



const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6000,
    title: "Web Development Course",
    description: "web developmet courses cover HTML,CSS,JavaScript,ReactJs"
  },
  {
    id: "p2",
    price: 5000,
    title: "Android Development Course",
    description: "Android developmenet course for android app development."
  },
  {
    id: "p3",
    price: 6000,
    title: "Cloud computing Course",
    description: "cloud computing course."
  },
  {
    id: "p4",
    price: 5000,
    title: "IOS DevelopmentCourse",
    description: "IOS developmenet course for IOS app development."
  },


]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <Courses />
      <h2>Buy your favorite products</h2>
      <div className={classes.productlist}>
        {DUMMY_PRODUCTS.map((product) => (

          <ProductItem
            Key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description} />
        ))}
      </div>
      
    </section>
  );
};

export default Products;
