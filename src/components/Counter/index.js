import { number } from "prop-types";
import { useCounter } from "react-use";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, { dec, inc }] = useCounter(startValue, null, startValue);

  return (
    <>
      <p role="marquee">{currentValue}</p>
      <button onClick={() => dec(step)}>-{step}</button>
      <button onClick={() => inc(step)}>+{step}</button>
    </>
  );
}

Counter.propTypes = {
  startValue: number,
  step: number,
};
