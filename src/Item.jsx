import { useContext } from "react";
import { TestContext } from "./TestContext";

const Item =(props)=>{
    const context = useContext(TestContext);

    const handleDeleteItem =(e)=>{
        //e: اشاره به المانی که داره از این متد استفاده می کند
        // alert(e.target.innerHTML);
        context.setTimeArr(context.timeArr.filter(t=> t =! e.target.innerHTML))
    }

    return(
        <div className="time_item" onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
}
export default Item;