
import { memo } from "react";

function Age({age}){
console.log("Age component rendered");
return (
    <div>
        <h2>Age: {age}</h2>
    </div>
)
}
export default memo(Age);