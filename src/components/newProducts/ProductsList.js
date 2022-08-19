import ProductItem from "./ProductItem";
import classes from "./ProductsList.module.css";

const DummyProducts = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    title: "Buttons tweed blazer",
    price: "59.99",
  },
  {
    src: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Flowt tweed Skirt",
    price: "68.99",
  },
  {
    src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    title: "Cotton T-shit",
    price: "99.99",
  },
];

const ProductsList = (props) => {
  return (
    <section className={classes.productsWrapper}>
      <h1 className={classes.productsHeader}>New Products</h1>
      <div className={classes.innerWrapper}>
        {props.products.map((product) => (
          <ProductItem
            src={product["get_image"]}
            title={product["product_name"]}
            price={product.price}
            url={product["get_absolute_url"]}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
