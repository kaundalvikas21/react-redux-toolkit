import { useSelector } from "react-redux";

const AddToCart = () => {

    const selector = useSelector((state)=>state.cart.value);
    console.log(selector)
  return (
    <div className="cart">
      <img
        src="https://img.icons8.com/?size=100&id=85080&format=png&color=ff0000"
        alt=""
      />
      <span className="cart-count">{selector}</span>
    </div>
  );
};

export default AddToCart;
