
import Route from './Route'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (

    <GlobalProvider >
    
     <Route />
    
    </GlobalProvider>
  );
}

export default App;
