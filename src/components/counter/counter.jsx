import { useState } from "react";
import { CartState } from "../../context/cartcontext";
import { QUANTITY_UPDATE, DELETE_PRODUCT } from "../../pages/constants";
import "./counter.scss";

function Counter({ quantity, id }) {
  const { dispatch } = CartState();
  const [count, setCount] = useState(quantity);

  const handleIncrement = (e) => {
    setCount((prevCount) => {
      dispatch({
        type: QUANTITY_UPDATE,
        payload: { id, quantity: prevCount + 1 },
      });
      return prevCount + 1;
    });
  };
  const handleChange = (e) => {
    if (e.target.value < 1) return dispatch({ type: DELETE_PRODUCT, payload: { id } });

    setCount(parseInt(e.target.value));
    return dispatch({
      type: QUANTITY_UPDATE,
      payload: { id, quantity: parseInt(e.target.value) },
    });
  };
  const handleDecrement = (e) => {
    if (count < 2) return dispatch({ type: DELETE_PRODUCT, payload: { id } });

    setCount((prevCount) => {
      dispatch({
        type: QUANTITY_UPDATE,
        payload: { id, quantity: prevCount - 1 },
      });
      return prevCount - 1;
    });
  };
  return (
    <div className="counter">
      <button className="counter__dec" onClick={handleDecrement}>
        -
      </button>
      <input
        type="number"
        className="counter__box"
        value={count}
        onChange={handleChange}
      />
      <button className="counter__inc" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}

export default Counter;
