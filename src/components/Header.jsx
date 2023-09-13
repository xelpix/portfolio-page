function Header({ isEnglish }) {
  let greeting = isEnglish ? (
    <span>
      Hello! My name is <span className="name-highlight">Artem</span> and I'm looking for a
      <span className="job-highlight"> job</span>.
    </span>
  ) : (
    <span>
      Привет! Меня зовут <span className="name-highlight">Артём</span> и я ищу
      <span className="job-highlight"> работу</span>.
    </span>
  );

  return (
    <header>
      <h2 className="greet-text">{greeting}</h2>
    </header>
  );
}
export default Header;
