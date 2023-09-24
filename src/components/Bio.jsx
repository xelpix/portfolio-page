import avatarka from '../assets/img/avatarka.jpg';

function Bio({ isEnglish }) {
  const bioHeader = isEnglish ? (
    <h2 className="bio-profile-about-title">
      Hello! My name is <span className="name-highlight">Artem</span> !
    </h2>
  ) : (
    <h2 className="bio-profile-about-title">
      Привет! Меня зовут <span className="name-highlight">Артём</span> !
    </h2>
  );

  const bioText = isEnglish
    ? "I'm 29 yo. I'm looking for a job and especially for a great team to work with. I want to learn from professionals and grow as software engineer, since this is my main passion right now. Lets build some life-changing apps together!"
    : 'Мне 29 лет. Я ищу работу, и в особенности отзывчивую и дружную команду. Я хочу учиться у профессионалов и расти как программист, потому что в последний год это моя главная цель. Пора создать что-нибудь крутое! ';

  return (
    <section className="bio-section">
      <div className="bio-content-wrapper">
        <img className="profile-img" src={avatarka} alt="" />
        <div className="bio-profile-about">
          {bioHeader}
          <p>{bioText}</p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
