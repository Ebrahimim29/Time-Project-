import { useContext } from "react";
import { TestContext } from "./TestContext";

const Item =(props)=>{
    const context = useContext(TestContext);
    return(
        <div className="time_item" style={{color:context}}>
            {props.children}
        </div>
    )
}
export default Item;