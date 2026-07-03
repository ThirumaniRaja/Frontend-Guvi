import { memo } from "react";

function Count({Count}){
console.log("Count component rendered");
return (
    <div>
        <h2>Count: {Count}</h2>
    </div>
)   
}
export default memo(Count);