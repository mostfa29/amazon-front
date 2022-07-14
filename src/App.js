import './App.css';
import DropdownMenu from './components/Elems/DropdownMenu';
import MenuItem from './components/header/menuItem/MenuItem';

function App() {
  return (
    <div className="app">

      <MenuItem>
        <DropdownMenu>test</DropdownMenu>
      </MenuItem>

    </div>
  );
}

export default App;
