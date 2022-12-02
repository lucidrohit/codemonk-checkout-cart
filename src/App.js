import "./App.scss";
import CartContextProvider from "./context/cartcontext";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Checkout />
      </CartContextProvider>
    </div>
  );
}

export default App;
