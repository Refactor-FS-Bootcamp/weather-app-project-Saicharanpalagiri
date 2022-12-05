import './App.css';

import CustomLay from './components/CustomLay';
import { AppContextProvider } from './context/appContext';
import ContextModel from './context/ContextModel';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
  
      <div className="App">
        {/* <AppContextProvider> */}
        <ContextModel>
        <CustomLay/>
          <AppRoutes/>
          </ContextModel>
          {/* </AppContextProvider> */}
  </div>
   );
}

export default App;
