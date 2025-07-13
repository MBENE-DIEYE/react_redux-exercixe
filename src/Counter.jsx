import { useDispatch, useSelector } from "react-redux"
import { increment } from "./counterSlice";

const Counter = () =>{
    const count = useSelector((state) => state.Counter.value);
    const dispatch = useDispatch();
    return(
        <>
        <div>
            <div>
                <button onClick={() =>dispatch(increment())}>Increment</button>
            </div>
            <div>
                <button onClick={() =>dispatch(decrement())}>Decrement</button>
            </div>
        </div>
        </>
    )
}