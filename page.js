'use client'
import React, { useState } from 'react';
import './page.css';

export default function Home() {
  const [colors, setColors] = useState({
    cell1: 'green',
    cell2: 'blue',
    cell3: 'blue',
    cell4: 'blue',
    cell5: 'yellow',
    cell6: 'blue',
    cell7: 'blue',
    cell8: 'blue',
    cell9: 'green',
  });

  const handleColorChange = (currentColor) => {
    const newColors = {};
    Object.keys(colors).forEach((cell) => {
      if (colors[cell] === currentColor) {
        if (currentColor === 'green') {
          newColors[cell] = 'lightgreen';
        } else if (currentColor === 'blue') {
          newColors[cell] = 'lightblue';
        } else if (currentColor === 'yellow') {
          newColors[cell] = 'lightyellow';
        } else if (currentColor === 'lightgreen') {
          newColors[cell] = 'green';
        } else if (currentColor === 'lightblue') {
          newColors[cell] = 'blue';
        } else if (currentColor === 'lightyellow') {
          newColors[cell] = 'yellow';
        }
      } else {
        newColors[cell] = colors[cell];
      }
    });
    setColors(newColors);
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className={colors.cell1} onClick={() => handleColorChange(colors.cell1)}></div>
          <div className={colors.cell2} onClick={() => handleColorChange(colors.cell2)}></div>
          <div className={colors.cell3} onClick={() => handleColorChange(colors.cell3)}></div>
        </div>
        <div className="row">
          <div className={colors.cell4} onClick={() => handleColorChange(colors.cell4)}></div>
          <div className={colors.cell5} onClick={() => handleColorChange(colors.cell5)}></div>
          <div className={colors.cell6} onClick={() => handleColorChange(colors.cell6)}></div>
        </div>
        <div className="row">
          <div className={colors.cell7} onClick={() => handleColorChange(colors.cell7)}></div>
          <div className={colors.cell8} onClick={() => handleColorChange(colors.cell8)}></div>
          <div className={colors.cell9} onClick={() => handleColorChange(colors.cell9)}></div>
        </div>
      </div>
    </main>
  );
}
