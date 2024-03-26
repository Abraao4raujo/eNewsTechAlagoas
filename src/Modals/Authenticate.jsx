import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../services/firebaseConfig";
import loginUser from "../services/loginUser";
import { registerUser } from "../services/RegisterUser";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1616162b;
  position: absolute;
  top: 0;
  z-index: 3;
`;
const Modal = styled.div`
  width: 400px;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin: auto;
  border-radius: 8px;
  background-color: #b4b4b4;
`;

const HeaderModal = styled.div``;
const TitleHeader = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  color: #00893c;
`;
const MainModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`;
const Inputs = styled.input`
  width: 100%;
  height: 30px;
  box-shadow: 1px 1px 1px #4949493c;
  border: none;
  border-radius: 4px;
  margin-bottom: 25px;
  padding: 5px;
`;
const Labels = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-family: "Inter", sans-serif;
  border-radius: 8px;
  font-size: 1.1rem;
  border: none;
  box-shadow: 2px 2px 2px #4949493c;
  cursor: pointer;
  font-weight: bold;
`;
const CreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LabelCreateAccount = styled.div`
  cursor: pointer;
  color: #00893c;
  font-weight: bold;
  font-family: "Inter", sans-serif;
`;
const DivModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #1616162b; */
  /* position: absolute; */
  /* top: 0; */
  /* z-index: 3; */
  display: flex;
`;

const Login = ({ title, nameBtn, setModalAuth, modalAuth }) => {
  const refEmail = useRef();
  const refPassword = useRef();
  const refNome = useRef();

  return modalAuth.show === true && modalAuth.auth === "login" ? (
    <Container>
      <DivModalContainer>
        <Modal>
          <HeaderModal>
            <TitleHeader>{title}</TitleHeader>
          </HeaderModal>
          <MainModal>
            <Labels htmlFor="email">Email:</Labels>
            <Inputs type="email" name="email" ref={refEmail} />
            <Labels htmlFor="password">Senha:</Labels>
            <Inputs type="password" name="password" ref={refPassword} />
          </MainModal>
          <Button
            className="btnLogin"
            onClick={() => {
              if (refEmail && refPassword !== "") {
                loginUser(
                  auth,
                  refEmail.current.value,
                  refPassword.current.value,
                  setModalAuth
                );
              }
            }}
          >
            Login
          </Button>
          <CreateAccount>
            <label>Não possui uma conta?</label>
            <LabelCreateAccount
              onClick={() => setModalAuth({ show: true, auth: "cadastro" })}
            >
              Criar conta
            </LabelCreateAccount>
          </CreateAccount>
        </Modal>
      </DivModalContainer>
    </Container>
  ) : (
    <Container>
      <Modal>
        <HeaderModal>
          <TitleHeader>Cadastro</TitleHeader>
        </HeaderModal>
        <MainModal>
          <Labels htmlFor="nome">Nome:</Labels>
          <Inputs type="text" name="nome" ref={refNome} />
          <Labels htmlFor="email">Email:</Labels>
          <Inputs type="email" name="email" ref={refEmail} />
          <Labels htmlFor="password">Senha:</Labels>
          <Inputs type="password" name="password" ref={refPassword} />
        </MainModal>
        <Button
          className="btnLogin"
          onClick={() => {
            registerUser(
              auth,
              refEmail.current.value,
              refPassword.current.value
            );
          }}
        >
          Cadastro
        </Button>
        <CreateAccount>
          <label>Possui uma conta?</label>
          <LabelCreateAccount
            onClick={() => setModalAuth({ show: true, auth: "login" })}
          >
            Entrar com conta existente
          </LabelCreateAccount>
        </CreateAccount>
      </Modal>
    </Container>
  );
};

export default Login;
