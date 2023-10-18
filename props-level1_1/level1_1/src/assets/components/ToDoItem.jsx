import "./ToDoItem.css";

const ToDoItem = (props) => {
  return (
    <section>
      <ul>
        <li>{props.todo.point}</li>
      </ul>
    </section>
  );
};

export default ToDoItem;
