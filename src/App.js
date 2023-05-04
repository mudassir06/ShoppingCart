import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
