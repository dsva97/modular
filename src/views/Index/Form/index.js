import { useInput } from "../../../components/Input";
import { User } from "../../../schemas/User";

export const Form = () => {
  const [name, InputName] = useInput("Names");
  const [age, InputAge] = useInput("Age");

  const createUser = async () => {
    const result = await useApi(
      async (data) => {
        const user = new User(data);
        await user.save();
        return true;
      },
      { name, age }
    );
    if (result) {
      alert("User created!");
    } else {
      alert("User not created. Something was wrong.");
    }
  };

  return /*html*/ `
    <div>
      <h5>Crear un nuevo usuario</h5>
      <form>
        ${InputName()}
        ${InputAge()}
        <button onclick="${createUser}">Crear</button>
      </form>
    </div>
  `;
};
