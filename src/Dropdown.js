function Dropdown({ array }) {
  const handleMouseOver = () => {
    var x = document.getElementById("select-dropdown").options.length;
    document.getElementById("select-dropdown").size = x;
  };

  const handleMouseOut = () => {
    document.getElementById("select-dropdown").size = 0;
  };

  return (
    <div className="dropdown">
      <h2>Should You Use A Dropdown?</h2>
      <select
        id="select-dropdown"
        className="dropbtn"
        value="select"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <option className="dropdown-content" value="select">
          Select
        </option>
        {array.map((item) => (
          <option
            className="dropdown-content"
            key={item.id}
            value={item.name}
            onClick={handleMouseOut}
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
