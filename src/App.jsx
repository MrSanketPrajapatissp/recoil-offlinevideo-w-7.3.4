import { useRecoilValue, RecoilRoot } from "recoil";
import { TodosAtomFamily } from "./store/atom/count";
import PropTypes from "prop-types";

function App() {
  return (
    <RecoilRoot>
      <Todo id={6} />
      <Todo id={8} />
      <Todo id={3} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(TodosAtomFamily(id));

  return (
    <div>
      <h3>{currentTodo.todo}</h3>
      <p>{currentTodo.id}</p>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
