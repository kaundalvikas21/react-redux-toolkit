import { useSelector } from "react-redux"

export default function CartList(){
    const cartSelector = useSelector((state)=>state.cart.items)
    console.log(cartSelector)
    return(
        <>
        <div className="cart-container">
            <div className="cart-header">
                <h2>Cart Items</h2>
                <span>{cartSelector.length} items</span>
            </div>
            {
                cartSelector.length>0 ? cartSelector.map((item)=>(
                    <div key={item.id} className="cart-item">
                        <div className="cart-info">
                            <img src={item.thumbnail} alt="" />
                            <div className="item-details">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                        </div>
                        <div className="item-actions">
                            <span className="price">${item.price}</span>
                            <button className="btn">Remove</button>
                        </div>
                    </div>
                ))
                :null
            }
            <div className="total-price">
                Total: ${cartSelector.reduce((sum,item)=>sum+item.price,0)}
            </div>
        </div>
        </>
    )
}