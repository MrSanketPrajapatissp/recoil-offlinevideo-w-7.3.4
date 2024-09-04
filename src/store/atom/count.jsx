import { atomFamily } from "recoil";

export const TODOS = [
  {
    id: 1,
    title: "Go to gym",
    description: "Go by cycle",
  },
  {
    id: 2,
    title: "Learn Express",
    description: "Learn by doing Code",
  },
];

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return (
      TODOS.find((x) => x.id === id) || {
        title: "Not found",
        description: "Not found",
      }
    );
  },
});

export const TodosAtomFamily = atomFamily({
  key: "TodoAtomFamily",
  default: (id) => {
    return (
      TODOS.find((x) => x.id === id) || {
        title: "Not Found",
        description: "Not Found",
      }
    );
  },
});
