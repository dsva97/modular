import { Row } from "./Row";
import classes from "./style.module.css";

export const Table = () => {
  const { users } = useStore();

  return /*html*/ `
    <table class="${classes.table}">
      <thead class="${classes.head}">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="${classes.tbody}">
        ${users.map(Row)}
      </tbody>
    </table>
  `;
};
