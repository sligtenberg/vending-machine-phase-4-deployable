import { useContext } from "react";
import { UserContext } from "../Context/user";

function Home() {
  const { user } = useContext(UserContext)
  return (
    <>
      <h2>Welcome to Vendville!</h2>
      <div className="instructions">
        Vendville is a social network of vending machines.
        Browse vending machines and buy snacks in the Shop tab.
        Create vending machines and add snacks to them in the {user.username}'s Vending Machine tab.
        Create your own custom snacks in the Manage Snacks tab. Happy vending!
      </div>
    </>
  );
}

export default Home;
