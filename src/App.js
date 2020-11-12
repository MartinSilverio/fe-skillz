import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import { menuData } from './utils/data';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar navItems={menuData.menu} />
      </div>
    </Router>
  );
}

export default App;
