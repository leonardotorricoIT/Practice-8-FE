import { useState } from "react";

export default function ColorManager() {
  const [colors, setColors] = useState<string[]>([
    "#FF0000",
    "#FFFA00",
    "#00FF2A",
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  const addColor = () => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(inputValue)) {
      setColors([...colors, inputValue]);
      setInputValue("");
    } else {
      alert("Enter a valid Hex color code");
    }
  };

  const changeBackground = (color: string) => {
    document.body.style.backgroundColor = color;
  };
  const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(inputValue);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono">
      <h1 className="text-2xl font-bold mb-4">Color Manager</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="#rrggbb"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white   border-black border-2 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        />
        <button
          onClick={addColor}
          className="text-black border-black border-2 px-4 py-2 rounded-lg ml-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-colors "
          style={{
            backgroundColor: isValidHex ? inputValue : "white",
          }}
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => changeBackground(color)}
            className="w-12 h-12 rounded-lg border-2 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            style={{ backgroundColor: color }}
            title={color}
          ></button>
        ))}
      </div>
    </div>
  );
}
