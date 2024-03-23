import styled from "styled-components";

const FooterLayout = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <div>
      <FooterLayout>
        <div className="rodape" id="contato">
          <label>Desenvolvido por Abraão Araujo</label>
        </div>
      </FooterLayout>
    </div>
  );
};

export default Footer;
