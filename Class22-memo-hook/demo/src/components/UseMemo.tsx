import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(4);
  const [count, setCount] = useState(0);

  function expensiveCalculation(num: number) {
    console.log("Running expensive calculation");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += num;
    }
    return result;
  }

  const total = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div>
      <h2>UseMemo Hook Demo</h2>

      <div>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
            style={{ marginLeft: 8 }}
          />
        </label>
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      </div>

      <p>Total: {total}</p>
      <p>Count: {count}</p>
    </div>
  );
}

export default UseMemo;