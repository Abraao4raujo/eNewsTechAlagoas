import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container-header">
        <nav>
          <ul className="list-header">
            <li className="logo-header">
              <svg
                width="45"
                height="45"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9545 1.41004C31.4888 0.53596 33.3703 0.535961 34.9046 1.41004L57.9894 14.5615C59.5504 15.4509 60.5143 17.1094 60.5143 18.906V45.094C60.5143 46.8906 59.5504 48.5491 57.9894 49.4385L34.9046 62.59C33.3703 63.464 31.4888 63.464 29.9545 62.59L6.86969 49.4385C5.30864 48.5491 4.34473 46.8906 4.34473 45.094V18.906C4.34473 17.1094 5.30864 15.4509 6.86969 14.5615L29.9545 1.41004Z"
                  fill="url(#paint0_linear_33_69)"
                />
                <path
                  d="M32.6443 4.29529L57.1952 45.8523H8.09333L32.6443 4.29529Z"
                  fill="white"
                />
                <path
                  d="M32.6442 19.7584L43.4318 38.1208H21.8567L32.6442 19.7584Z"
                  fill="#00893C"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_33_69"
                    x1="46.2185"
                    y1="28.16"
                    x2="61.0999"
                    y2="-31.8544"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#039141" />
                    <stop
                      offset="0.682952"
                      stopColor="#146B3A"
                      stopOpacity="0.377435"
                    />
                    <stop offset="1" stopColor="#146B3A" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <a href="./index.html">
                <label>eNewsTech</label>
              </a>
            </li>
            <div className="logo-nav-header">
              <li>
                <div className="dropdown">
                  <button className="dropbtn">Notícias</button>
                  <div className="dropdown-content">
                    <a href="#noticia">Últimas</a>
                    <a href="#esportes">Esportes</a>
                    <a href="#entretenimento">Entretenimento</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#cultura">Cultura</a>
              </li>
              <li>
                <a href="#eventos">Eventos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li className="tonarJornalista">
                <a className="CorDestaqueVerde btnTornarJornalista">
                  Tornar-se jornalista
                </a>
              </li>
              <li>
                <a>
                  <input
                    type="button"
                    value="Login"
                    className="btnSearch"
                    id="botaoLogin"
                  />
                </a>
              </li>
              <li className="bemvindo">
                <h3>Seja bem-vindo</h3>
                <label className="destaque-verde">Abraão</label>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
