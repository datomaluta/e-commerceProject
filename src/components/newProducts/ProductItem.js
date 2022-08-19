import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.productCard}>
      <a className={classes.anchor} href={props.url}>
        <div className={classes.imageWrapper}>
          <img src={props.src} />
        </div>
        <div className={classes.info}>
          <p className={classes.title}>{props.title}</p>
          <p className={classes.price}>${props.price}</p>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
