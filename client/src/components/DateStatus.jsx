import React, { useEffect, useState } from 'react';

function DateStatus({ targetDate }) {
  const [color, setColor] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const differenceInDays = Math.floor(
      (targetDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays > 15) {
      setColor('green');
    } else if (differenceInDays >= 8 && differenceInDays <= 14) {
      setColor('yellow');
    } else if (differenceInDays < 8) {
      setColor('red');
    }
  }, [targetDate]);

  return (
    <div style={{ backgroundColor: color }}>
      <p>{color.toUpperCase()}</p>
    </div>
  );
}

export default DateStatus;