import styled from "styled-components";

const Footer = () => {

  const Footer = styled.footer`
    position: absolute;
    width: 100%;
    bottom: 0;
  `
  return (
    <div>
      <Footer>
        <div className="rodape" id="contato">
          <label>Desenvolvido por Abraão Araujo</label>
        </div>
      </Footer>
    </div>
  );
};

export default Footer;
