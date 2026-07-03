import { memo } from "react";

function AgeBtn({handleAge}){
console.log("AgeBtn component rendered");
return (
    <div>
        <button onClick={handleAge}>Increment Age</button>
    </div>
)
}
export default memo(AgeBtn);