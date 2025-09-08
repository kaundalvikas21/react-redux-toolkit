import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {

    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);
  return (
    <div className="cart">
     <Link to='/cart'>
      <img
        src="https://img.icons8.com/?size=100&id=85080&format=png&color=ff0000"
        alt=""
      />
      <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
     </Link>
    </div>
  );
};

export default AddToCart;
