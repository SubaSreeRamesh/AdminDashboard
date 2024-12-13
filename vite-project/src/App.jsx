import {Route,Routes} from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';
import './App.css'
import AdminRouters from './Routers/AdminRouters';

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<CustomerRoutes/>}></Route>
      <Route path='/admin/*' element={<AdminRouters/>}></Route>
     </Routes>
    </>
  )
}

export default App
