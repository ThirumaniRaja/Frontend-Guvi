import { memo } from "react";

function CountBtn({handleCount}) {
console.log("CountBtn component rendered");
return (
    <div>
        <button onClick={handleCount}>Increment Count</button>
    </div>
)
}
export default memo(CountBtn);