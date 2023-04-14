import { useState } from 'react';
import './styles.css';
const Counter = props => {
    const { uri } = props;
    console.log('el componente se carga')
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return <div className='wrapper'>
        <h2>Counter</h2>
        <img src={uri} />
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}
export default Counter;