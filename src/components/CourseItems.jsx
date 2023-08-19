import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cartSlice";

function CourseItems({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price} USD</h4>

        <div className="btnsDiv">
          <button onClick={() => dispatch(increase(id))}>
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(decrease(id))}>
            <BsChevronDown />
          </button>
        </div>
        <button
          className="deleteItem"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseItems;
