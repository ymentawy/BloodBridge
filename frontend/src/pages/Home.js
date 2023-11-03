import { Navigate, redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar';
function Home(props) {
    console.log(props.name)
    if (props.name !== '') 
    return (
        <div>
            return <Navigate to="/login" />
        </div>
    );
    else{
        <div>
            return <Navigate to="/donors" />
        </div>
    }
}
export default Home