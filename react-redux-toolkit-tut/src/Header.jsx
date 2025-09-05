import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header>
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <AddToCart />
    </header>
  );
};

export default Header;
