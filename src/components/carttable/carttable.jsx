import "./carttable.scss";
import locationIcon from "./../../assets/icon/LOCATION.png";
import checkIcon from "./../../assets/icon/check.png";

import CartCard from "../common/cartitemcard/cartcard";
import Counter from "../counter/counter";
import deleteIcon from "./../../assets/icon/DELETE.png";
import { CartState } from "./../../context/cartcontext";
import { DELETE_PRODUCT } from "../../pages/constants";

function CartTable() {
  const {
    state: { cartList },
    dispatch,
  } = CartState();
  return (
    <table className="cart-table" cellSpacing="0">
      <thead>
        <tr className="cart-table__header">
          <th className="cart-table__header__product">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((card) => {
          return (
            <tr className="cart-table__product" key={card.id}>
              <td>
                <CartCard cardDetails={card} />
              </td>
              <td>{card.price} $</td>
              <td>
                <Counter id={card.id} quantity={card.quantity} />
              </td>
              <td>
                {card.quantity * card.price} ${" "}
                <img
                  className="cart-table__product__total"
                  src={deleteIcon}
                  alt="delete"
                  onClick={() =>
                    dispatch({ type: DELETE_PRODUCT, payload: { id: card.id } })
                  }
                />
              </td>
            </tr>
          );
        })}

        <tr className="cart-table__product">
          <td className="cart-table__pincode" colSpan={2}>
            <h3>Delivery Availability</h3>
            <div className="cart-table__pincode__input">
            <img src={locationIcon} alt="check" />
              <input
                type="number"
                placeholder="110003"
                className="cart-table__input__pincode"
              />
              <button className="cart-table__input__pincode-check">
                CHANGE
              </button>
            </div>
            <div className="cart-table__pincode__details">
              <div className="cart-table__pincode__details__item">
                <img src={checkIcon} alt="check" />
                <p>Free delivery</p>
              </div>
              <div className="cart-table__pincode__details__item">
                <img src={checkIcon} alt="check" />
                <p>Cash on delivery</p>
              </div>
              <div className="cart-table__pincode__details__item">
                <img src={checkIcon} alt="check" />
                <p>Estimated delivery time is 3 - 5 days</p>
              </div>
            </div>
          </td>

          <td className="cart-table__total" colSpan={3}>
              <h4 className="cart-table__total__heading">Order Summary (xx items)</h4>
              <div className="cart-table__total__table">
                    <div className="cart-table__total__table__item">
                      <div className="cart-table__total__table__item__heading">Subtotal</div>
                      <div className="cart-table__total__table__item__value">$</div>
                    </div>
                    <div className="cart-table__total__table__item">
                      <div className="cart-table__total__table__item__heading">Total Discount</div>
                      <div className="cart-table__total__table__item__value">$</div>
                    </div>
                    <div className="cart-table__total__table__item">
                      <div className="cart-table__total__table__item__heading">Standard Shipping</div>
                      <div className="cart-table__total__table__item__value"></div>
                    </div>
                    <div className="cart-table__total__table__item">
                      <div className="cart-table__total__table__item__heading">Order Total</div>
                      <div className="cart-table__total__table__item__value">$</div>
                    </div>
                    <div className="cart-table__total__table__item">
                      <button className="cart-table__total__table__item__continue">CONTINUE SHOPPING</button>
                      <button className="cart-table__total__table__item__checkout">CHECKOUT</button>
                    </div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTable;
