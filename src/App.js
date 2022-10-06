import "./App.css";
import Dropdown from "./Dropdown";

function App() {
  // Array For Dropdown Content
  const dropdownContent = [
    {
      id: 1,
      name: "Yes",
    },
    {
      id: 2,
      name: "Probably Not",
    },
  ];

  return (
    <div>
      <Dropdown array={dropdownContent} />
    </div>
  );
}

export default App;
