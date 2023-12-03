import './App.scss';
import Header from './components/header/Header';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header></Header>
      </div>
      <div className='main-container'>
        <div className='sidenav-container'>
        </div>
        <div className='app-content'>
          <Outlet></Outlet>
          {/* outlet để hiện tất cả component con vào đây */}
        </div>
      </div>
    </div>
  );
}

export default App;
