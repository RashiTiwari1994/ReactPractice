import React from "react";
import { Input } from "./Input";
function AppColor() {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    const updatedColors = [...colors, newColor];
    setColors(updatedColors);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

const useState = React.useState;
export default AppColor;
