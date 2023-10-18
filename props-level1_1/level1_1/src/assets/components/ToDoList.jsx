import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const todoArray = [
    { point: "Einkaufen" },
    { point: "Sport" },
    { point: "Spazieren" },
    { point: "Coden" },
    { point: "Lesen" },
  ];
  return (
    <section>
      <h1>To Do</h1>
      {todoArray.map((item, index) => {
        return <ToDoItem key={index} todo={item} />;
      })}
    </section>
  );
};

export default ToDoList;
