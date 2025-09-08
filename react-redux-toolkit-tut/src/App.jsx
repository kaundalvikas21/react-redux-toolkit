import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Product from "./Product";
import CartList from "./CartList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Product />}></Route>
          <Route path='/cart' element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
