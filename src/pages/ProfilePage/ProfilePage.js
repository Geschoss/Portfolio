import avatar from "../../img/photo.jpg";
import "./ProfilePage.css";
import telegram from "../../img/icons/telegram.svg";
import vk from "../../img/icons/vk.svg";
import github from "../../img/icons/github.svg";
import htmllogo from "../../img/htmllogo.png";
import csslogo from "../../img/csslogo.png";
import jslogo from "../../img/jslogo.png";
import Technology from "../../components/ProfilePage/Technology";

export const ProfilePage = () => (
  <>
    <div className="profile-section">
      <div className="card">
        <div className="bio">
          <div className="bio-text">
            <h1>Веб-разработчик</h1>
            <h2>
              <mark>Воронков Вадим</mark>
            </h2>
            <p>
              Привет! Я занимаюсь версткой адаптивных и интерактивных сайтов
            </p>
            <p className="messengers">
              <a href="https://t.me/vaadimvoronkov">
                <img className="messenger-icon" src={telegram} alt="tg" />
              </a>
              <a href="https://vk.com/vaadimvoronkov">
                <img className="messenger-icon" src={vk} alt="vk" />
              </a>
              <a href="https://github.com/vaadimvoronkov">
                <img className="messenger-icon" src={github} alt="github" />
              </a>
            </p>
          </div>
        </div>
        <div className="photo">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
    <div className="stack-section">
      <div className="stack">
        <Technology image = {htmllogo} name = {"HTML"}></Technology>
        <Technology image = {csslogo} name = {"CSS"}></Technology>
        <Technology image = {jslogo} name = {"JavaScript"}></Technology>
      </div>
    </div>
  </>
);
