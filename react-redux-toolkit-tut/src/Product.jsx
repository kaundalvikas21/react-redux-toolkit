import {useDispatch } from "react-redux";
import { addItem } from "./redux-toolkit/slice";
const Product = () => {

    const dispatch=useDispatch()
    return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://img.freepik.com/premium-photo/3d-rendering-headphone-mockup_786615-575.jpg?w=1480"
          alt=""
        />
      </div>

      <div className="product-info">
        <h1>Wireless Headphones</h1>
         <span className="product-price">$129.99</span>
        <p className="description">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life, and a sleek
          modern design for everyday use..
        </p>
        <button onClick={()=>dispatch(addItem(1))} className="btn">Add to Cart</button>
      </div>
    </div>
  );
};
export default Product;
