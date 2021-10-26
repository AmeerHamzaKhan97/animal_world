import { UserService } from "./UserService";
import { useHistory } from "react-router-dom";
import Login from"./LogIn";
const Home = ({ login }) => {
  const locationHistory = useHistory();

  const showPopup = () => {
    // UserService.login(() => {
    //   if (UserService.isLogged()) {
    //     locationHistory.push("/");
    //   }
    // });
  };
  if (login!=undefined || login!= null) {
    <Login open={true}/>
  }

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
