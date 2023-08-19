import { useSelector, useDispatch } from "react-redux";
import CourseItems from "./CourseItems";
import { clearCart, restartCart } from "../control/cartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>My Cart</h2>
            <h4>Empty</h4>
            <button
              className="cartDeletebtn"
              onClick={() => dispatch(restartCart())}
            >
              Bring Back Courses
            </button>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>My Cart</h2>
            <div>
              {cartItems.map((item, index) => {
                return <CourseItems {...item} key={index} />;
              })}
            </div>
            <footer>
              <hr />
              <div style={{ marginTop: 20 }}>
                <h4>
                  Total amount : <span>{total} USD</span>
                </h4>
              </div>
              <button
                style={{ marginTop: 10 }}
                onClick={() => dispatch(clearCart())}
                className="cartDeletebtn"
              >
                Delete
              </button>
            </footer>
          </header>
        </section>
      )}
    </>
  );
}

export default CourseList;
