import classes from "./style.module.css";

const Message = ({ content, date, username, idUser }) => {
  const { session } = useStore();
  const isOwner = session.user.id === idUser;

  return /*html*/ `
    <div class="${classes.container} ${isOwner && classes.owner}">
      <span class="${classes.username}"> ${username} </span>
      <p class="${classes.content}"> ${content} </p>
      <span class="${classes.date}"> ${date} </span>
    </div>
  `;
};

export const Messages = ({ messages }) => {
  return /*html*/ `
    <div>
      ${messages.map(Message)}
    </div>
  `;
};
