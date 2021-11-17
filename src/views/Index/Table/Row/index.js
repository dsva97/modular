import classes from "./style.module.css";
import { User } from "../../../../schemas/User";

export const Row = ({ id, name, age, course }) => {
  const [isEditable, setEditable] = useState(false);

  const updateUser = async () => {
    const result = await useApi(
      async (data) => {
        const user = await User.findById(data.id);
        return await user.update(data);
      },
      { name, age, course, id }
    );
    if (result) {
      alert("New user created!");
    } else {
      alert("Something was wrong");
    }
    setEditable(false);
  };

  const removeUser = async () => {
    const sure = confirm("Are you sure?");
    if (sure) {
      const result = await useApi(
        async (data) => {
          const user = await User.findById(data.id);
          return await user.remove();
        },
        { id }
      );

      if (result) {
        alert("New user created!");
      } else {
        alert("Something was wrong");
      }
    }
  };

  return /*html*/ `
    <tr class="${classes.row}">
      <td class="${classes.cell}">${name}</td>
      <td class="${classes.cell}">${age}</td>
      <td class="${classes.cell}">${course}</td>
      <td class="${classes.actions}">
        ${
          isEditable
            ? /*html*/ `
                <button onclick="${() => setEditable(false)}">Cancel</button>
                <button onclick="${updateUser}">Save</button>
              `
            : /*html*/ `
                <button onclick="${() => setEditable(true)}">Edit</button>
                <button onclick="${removeUser}">Remove</button>
              `
        }
      </td>
    </tr>
  `;
};
