import imageHeader from '../../assets/img/imageHeader.svg'
import './style.css'

function Header() {
  return (
    <header>
      <div className="divHeader">
        <img src={imageHeader} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/joaoa_rezende" target="_blank">
            @joaoa_rezende
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
