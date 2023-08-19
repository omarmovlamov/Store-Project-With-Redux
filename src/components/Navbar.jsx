import { BsFillBasket2Fill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="main">
        <h3>Courses App</h3>
        <div className="navDiv">
          <div className="itemsdiv">
            <p>{quantity}</p>
          </div>
          <BsFillBasket2Fill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
