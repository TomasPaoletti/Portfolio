import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import "@fontsource/montserrat";
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default App
