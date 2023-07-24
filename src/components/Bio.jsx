import avatar from '../assets/img/avatar.jpg';

function Bio() {
  return (
    <section className="bio-section">
      <div className="bio-content-wrapper">
        <img className="profile-img" src={avatar} alt="" />
        <div className="bio-profile-about">
          <h2 className="bio-profile-about-title">
            Hello! My name is <span className="name-highlight">Artem</span> !
          </h2>
          <p>
            I'm 29 yo. I'm looking for a job and especially for a great team to work with. I want to
            learn from professionals and grow as software engineer, since this is my main passion
            right now. Lets build some life-changing apps together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
