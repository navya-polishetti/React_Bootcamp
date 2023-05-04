import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2 bg-gray-100"
      alt="logo"
      src="https://dcassetcdn.com/design_img/1889677/444768/444768_10393234_1889677_85203911_image.png"
    />
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <Title />

      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/home">Home</Link>
          </li>
          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/SignIn">Sign in</Link>
          </li>
          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="px-2 hover:bg-orange-300 hover:rounded-md">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
