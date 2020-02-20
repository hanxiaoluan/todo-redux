let nextTextId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTextId++,
  text
});
