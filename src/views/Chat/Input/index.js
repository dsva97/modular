export const Input = () => {
  const { session } = useStore();
  const [message, setMessage] = useState("");

  const content = {
    content: message,
    idUser: session.user.id,
    username: session.user.username,
  };

  const send = () => {
    useWSocket((content) => {
      content.date = new Date().toLocaleString();
      emitRoom(content);
    }, content);
  };

  return /*html*/ `
    <div class="${classes.container}">
      <input class="${classes.input}" type="text" 
        onchange="${(e) => setMessage(e.target.value)}"
        placeholder="Type a message..." />
      <button class="${classes.button}" onclick="${send}">Send</button>
    </div>
  `;
};
