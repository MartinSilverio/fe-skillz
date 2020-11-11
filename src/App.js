import './App.scss';
import NavBar from './components/navbar/NavBar';
import { menuData } from './utils/data';

function App() {
  return (
    <div className='App'>
      <NavBar navItems={menuData.menu} />
    </div>
  );
}

export default App;
