import { NavLink } from "react-router-dom";
import { tasks } from "../data/tasks";

export default function TaskList() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4 text-center">Liste des tâches</h1>
      <ul className="tache-list">
        {tasks.map((task) => (
           <NavLink to={`/tasks/${task.id}`}>
          <li key={task.id}>
           
              <strong>{task.title}</strong>
          </li>
                      </NavLink>

        ))}
      </ul>
    </div>
  );
}
