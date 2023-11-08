import './App.scss';
import Header from './components/header/Header';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='app-container'>
      <Header></Header>
      <div>
        test link
      </div>
      <div>
        <button>
          <Link to="/users">go User</Link>
        </button>
        <button>
          <Link to="/admin">go admin</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
