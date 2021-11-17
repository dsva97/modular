import { Messages } from "./Messages";
import { Users } from "./Users";
import { Input } from "./Input";
import { Login } from "./Login";

export const ChatPage = ({ messages }) => {
  setStore({ messages });
  const { session, setSession } = useStore();

  return /*html*/ `
    <div>
      <h2>Welcome to Chat</h2>
      <main>
        <section> ${Messages()} </section>
        <section> ${Users()} </section>
        <section>
          ${session ? Input() : Login({ setSession })}
        </section>
      </main>
    </div>
  `;
};
