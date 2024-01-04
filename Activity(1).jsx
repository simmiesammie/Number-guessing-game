import React, { useState, useEffect } from 'react';

const Guess = () => {
  const [random, setRandom] = useState(generateRandom());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandom() {
    return Math.floor(Math.random() * 20);
  }

  useEffect(() => {
    setRandom(generateRandom());
  }, [message]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);

    const guess = parseInt(e.target.value, 10);
    if (!isNaN(guess)) 
    {
      if (guess === random)
       {
        setMessage('Yippie! Correct Guess');
      } 
      else 
      {
        setMessage(`RIP, your guess ${guess} is incorrect. Try again!`);
      }
    }
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <label>
        Enter your guess (between 1 and 20):
        <input
          type="number"
          value={userGuess}
          onChange={handleInputChange}
          min="1"
          max="20"
        />
      </label>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Guess;