import classes from "./style.module.css";

const User = ({ username, avatar }) => {
  const { session } = useStore();
  const isMe = session.user.username === username;
  return /*html*/ `
    <div class="${classes.container}">
      <img class="${classes.avatar}" src="${avatar}" alt="${username}" />
      <span class="${classes.username}"> ${username} ${isMe && "(Me)"} </span>
    </div>
  `;
};

export const Users = ({ users }) => {
  return /*html*/ `
    <div>
      ${users.map(User)}
    </div>
  `;
};
