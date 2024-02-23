import './combinationSum.css'; // Import the CSS file
import React, { useState } from 'react';

function CombinationSumCalculator() {
  const [target, setTarget] = useState('');
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState([]);

  const calculateCombinations = () => {
    const targetSum = parseInt(target);
    const nums = numbers.split(' ').map(num => parseInt(num.trim())); // Split by space

    const findCombinations = (arr, remaining, index, path, res) => {
  if (remaining === 0) {
    res.push([...path]);
    return;
  }
  if (remaining < 0 || index === arr.length) return;

  // Include the current number and continue recursively
  path.push(arr[index]);
  findCombinations(arr, remaining - arr[index], index, path, res); // Change here

  // Backtrack and exclude the current number
  path.pop();
  findCombinations(arr, remaining, index + 1, path, res);
};



    const result = [];
    findCombinations(nums, targetSum, 0, [], result);
    setResult(result);
  };

  return (
    <div className="container">
      <h2>Combination Sum Calculator</h2>
      <div className="form-group">
        <label>Target Sum:</label>
        <input type="number" value={target} onChange={e => setTarget(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Numbers (space-separated):</label>
        <input type="text" value={numbers} onChange={e => setNumbers(e.target.value)} />
      </div>
      <button onClick={calculateCombinations}>Calculate</button>
      <div className="result">
        <h3>Result:</h3>
        {result.map((combination, index) => (
  <div className='hidden-result' key={index}>
    <h4>Combination: {index + 1}</h4>
    {combination.map((num, i) => (
      <div key={i}>
        {num}
        <br />
        
      </div>
      
    ))}
  </div>
))}
      </div>
    </div>
  );

}

export default CombinationSumCalculator;