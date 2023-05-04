import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="font-bold p-10 m-10 h-28 bg-gray-100 ">
      This Food App is developed by {user.name} - {user.email}
    </h4>
  );
};

export default Footer;
