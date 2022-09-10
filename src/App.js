import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./store/action/user";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.user.user;
  });
  const datas = { id: 2 };
  const handleAdd = () => {
    dispatch(addUser(datas));
  };

  console.log("++++", data);
  return (
    <>
      hi
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

export default App;
