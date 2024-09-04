import { useRecoilValue, RecoilRoot } from "recoil";
import { TodosAtomFamily } from "./store/atom/count";
import PropTypes from "prop-types";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(TodosAtomFamily(id));

  return (
    <div>
      <h3>{currentTodo.title}</h3>
      <p>{currentTodo.description}</p>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default App;
