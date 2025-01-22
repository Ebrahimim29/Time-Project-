import { useContext } from 'react';
import Item from './Item'
import { TestContext } from './TestContext';

const SabtTime =(props)=>{
    // console.log(props.children);
    const context = useContext(TestContext);
    
    return(
        <div className="main_time_list">
            {context.timeArr.map((c)=>(
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}
export default SabtTime;