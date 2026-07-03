import { memo } from "react";
function Title(){
console.log("Title component rendered");
return (
    <div>
        <h1>React Hooks Demo</h1>
    </div>
)
}

export default memo(Title);