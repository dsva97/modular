export const Login = ({ setSession }) => {
  const [isAllowed, setAllow] = useState(false);
  const [username, setUsername] = useState("");

  const verify = () => {
    const result = useApi(() => verifyUser(username));

    if (result) {
      setAllow(true);
    } else {
      setAllow(false);
    }
  };

  const login = () => {
    const result = useApi(() => loginUser(username));

    if (result) {
      setSession(result);
    } else {
      alert("Something was wrong.");
    }
  };

  return /*html*/ `
    <div class="${classes.container}">
      <input class="${classes.input}" value="${username}"
        onchange="${(e) => setUsername(e.target.value)}" />
      ${
        isAllowed
          ? /*html*/ `
              <button class="${classes.button}" onclick="${verify}">Verify</button>
            `
          : /*html*/ `
              <button class="${classes.button}" onclick="${login}">Login</button>
            `
      }
      ${message && /*html*/ `<span>${message}</span>`}
    </div>
  `;
};
