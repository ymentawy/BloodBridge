import { Navigate, redirect } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function Home(props) {
  console.log(props.name + "salmffkosaokfsasfok");
  if (props.name == "")
    return (
      <div>
        return <Navigate to="/loginsignup" />
      </div>
    );
  else {
    <div>
      return <Navigate to="/donors" />
    </div>;
  }
}
export default Home;
