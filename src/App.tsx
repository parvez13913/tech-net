import { decrement, increment } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="mx-auto mt-10 text-center py-8 shadow-2xl border w-96">
      <h1 className="text-4xl font-bold mb-4">Counter</h1>
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className="text-2xl">{count}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
