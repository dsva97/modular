import { Form } from "./Form";
import { Table } from "./Table";

export const IndexPage = ({ users }) => {
  setStore({ users });
  return /*html*/ `
    <div>
      <h2>Users</h2>
      ${Form()}
      ${Table()}
    </div>
  `;
};
