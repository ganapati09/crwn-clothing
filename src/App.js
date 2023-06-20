
import { Routes,Route } from 'react-router-dom';
import Home from './Components/routes/Home/Home';
import './categories.styles.scss';

import Nav from './Components/routes/Nav/Nav';
import Authentication from './Components/routes/Authentication/Authentication';

const Shop = () => {
  return (
    <div>
      shoooooooooooooooooooooooooooooop
    </div>
  )
}
function App() {
 
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
   
  );
}

export default App;
