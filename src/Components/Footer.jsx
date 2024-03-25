import styled from "styled-components";

const FooterLayout = styled.footer`
  position: absolute;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterLayout>
      <div className="rodape" id="contato">
        <label>Desenvolvido por Abraão Araujo</label>
      </div>
    </FooterLayout>
  );
};

export default Footer;
