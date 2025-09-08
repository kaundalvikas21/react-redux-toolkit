import {useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux-toolkit/slice";
import { useEffect } from "react";
import {fetchProducts} from "./redux-toolkit/productSlice";

const Product = () => {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    const productSelector=useSelector((state)=>state.products.items);
    console.log(productSelector);

    const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);

    return (
    <div className="grid">
      {
        productSelector.length && productSelector.map((item)=>(
          <div key={item.id} className="card">
           <img src={item.thumbnail} alt="" />
           <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
            <div className="category">{item.category}</div>
            <div className="brand">{item.brand}</div>
            <div className="price">{item.price}</div>
            <div className="rating">{item.rating}</div>
            {
              cartSelector.find(cartItem=> cartItem.id === item.id) ?
                <button className="btn btn-disable">Added in cart</button>
                 :
                <button onClick={()=>dispatch(addItem(item))} className="btn">Add to cart</button>
            }
         
           </div>
          </div>
        ))
      }
    </div>
  );
};
export default Product;
