import { useInput } from "../../components/Input";

export const IndexPage = () => {
  const [names, InputNames] = useInput("Names");
  const [email, InputEmail] = useInput("Email");
  const [subject, InputSubject] = useInput("Subject");
  const [message, InputMessage] = useInput("Subject");

  const sendMessage = async () => {
    const data = {
      names,
      email,
      subject,
      message,
    };

    const result = await useApi(sendMailContact, data);

    if (result) {
      alert("User created!");
    } else {
      alert("User not created. Something was wrong.");
    }
  };

  return /*html*/ `
    <div>
      <h2>Contact</h2>
      <form onsubmit="${sendMessage}">
        ${InputNames()}
        ${InputEmail()}
        ${InputSubject()}
        ${InputMessage()}
        <button type="submit">Send</button>
      </form>
    </div>
  `;
};
