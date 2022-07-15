import './App.css';
import DropdownMenu from './components/dropDownMenu/DropdownMenu';
import MenuItem from './components/header/menuItem/MenuItem';
import SearchElem from './components/searchElem/SearchElem';

function App() {
  return (
    <div className="app">

      {/*      <MenuItem>
        <DropdownMenu>test</DropdownMenu>
  </MenuItem>*/}
      <SearchElem />

    </div>
  );
}

export default App;
