import "./checkout.scss";
import Callout from "./../components/common/callout/callout";
import NavBar from "./../components/navbar/navbar";
import TrackProgress from "./../components/trackprogress/trackprogress";
import CartTable from "../components/carttable/carttable";
import Footer from "../components/footer/footer";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__header">
        <NavBar />
        <TrackProgress />
        <Callout text="Shop for $5000 or more and get 10% discount on your order" />
      </div>
      <div className="checkout__main">
        <h2>Shopping Cart</h2>
        <CartTable />
      </div>
      <div className="checkout__footer">
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
