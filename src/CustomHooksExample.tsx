import "./styles.css";
import { useCounter } from "./cutomHooks";
const CustomHooksExample = () => {
  const { count, setCountIncriment, setFullName, name } = useCounter();
  return (
    <div className="App">
      <h2>Counter example</h2>
      <button onClick={() => setCountIncriment()}>counter:{count}</button>
      <h2> Name change</h2>
      name: {name}
      <button onClick={() => setFullName("Smith")}>Get Full Name</button>
    </div>
  );
};
export default CustomHooksExample;
