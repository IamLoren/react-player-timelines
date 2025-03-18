import React from 'react';
import styles from './Timelines.module.css';

interface TimelinesProps {
  onTimeClick: (seconds: number) => void;
}

const Timelines: React.FC<TimelinesProps> = ({ onTimeClick }) => {
  
  const handleTimeClick = (timeString: string) => {
    // Парсимо час з формату "1:00" в секунди
    const [minutes, seconds] = timeString.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    onTimeClick(totalSeconds);
  };
  
  return (
    <ul>
        <li className={styles.timelines}>
            <h2 onClick={() => handleTimeClick("1:00")}>Timeline 1 1:00</h2>
            <p>Description 1</p>
        </li>
        <li className={styles.timelines}>
            <h2 onClick={() => handleTimeClick("2:00")}>Timeline 2 2:00</h2>
            <p>Description 2</p>
        </li>
        <li className={styles.timelines}>
            <h2 onClick={() => handleTimeClick("2:15")}>Timeline 3 2:15</h2>
            <p>Description 3</p>
        </li>
    </ul>
  )
}

export default Timelines