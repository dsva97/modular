const App = ({ children }) => {
  return /*html*/ `
    <div>
      <header>
        <h1><a href="/">OurApp</a></h1>
      </header>
      <main>${children}</main>
      <footer>
        This is the footer
      </footer>
    </div>
  `;
};

export default App;
