import Signup from './compnents/Signup';
import Login from './compnents/Login';
import Profile from './compnents/Profile';
import PrivateRoute from './Route\'s/PrivateRoute';
import { Route,Routes,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
    <Route path='/profile' element={ < PrivateRoute Component={Profile} />} />
    {/* <Route path='/profile' element={ < PrivateRoute><Profile/></PrivateRoute>} /> */}
    <Route path='/login' element={< Login/>} />
    <Route path='/signup' element={<Signup />} />
    <Route path="*"  element={ < Navigate to="/login" />} ></Route>
    </Routes>
    </>
  );
}

export default App;
