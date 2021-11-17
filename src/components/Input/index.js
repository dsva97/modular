import classes from "./style.module.css";

export const Input = ({ name, value, onchange }) => /*html*/ `
  <label class="${classes.label}">
    <span class="${classes.span}">${name}</span>
    <input class="${classes.input}" value="${value}" onchange="${onchange}" />
  </label>
`;

export const useInput = (name) => {
  const [value, setValue] = useState("");

  const onchange = (e) => {
    setValue(e.target.value);
  };

  const InputComponent = Input({ name, value, onchange });

  return [value, InputComponent];
};
