import { notification } from 'antd';
import React, { useState, useEffect } from 'react';

setTimeout(() => {
  
}, 1000);
const Countdown = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount) : 300;
  });

  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(countdownInterval);
          setTimeIsUp(true);
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());

    if (timeIsUp) {
     
      setTimeout(() => {
        notification.success({
          message:'Hết thời gian thanh toán'
        })
        window.location.href = '/';
      }, 1000);
    
    }
  }, [count, timeIsUp]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div>
      {timeIsUp ? (
        <div>Time is up!</div>
      ) : (
        <div style={{fontSize:45, paddingLeft:30,textAlign:'center'}}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      )}
    </div>
  );
};

export default Countdown;