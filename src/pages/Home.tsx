import React, { Component, useState } from "react";
import * as C from "./styles";

export function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    const res = [email, password]
    console.log(res)
    setEmail('')
    setPassword('')
    
  } 
  return (
    <C.Section>
      <C.CenterBox>
        <C.Title>The Cinelist</C.Title>
        <C.FormBox>
          <h1>Faça o login</h1>
          <C.InputLogin type={"text"}
           placeholder="Insira seu email..." 
           value={email}
           onChange={(e) => [setEmail(e.target.value)]}
           required />
          <C.InputPassword type={"password"}
           placeholder="Insira sua senha..."
           value={password}
           onChange={(e) => [setPassword(e.target.value)]}
            required/>
          <C.ButtonLogin onClick={handleLogin}>Fazer login</C.ButtonLogin>

          <p>Não tem uma conta? Crie agora!</p>
          <C.ButtonSignup>Registrar uma conta</C.ButtonSignup>
        </C.FormBox>
      </C.CenterBox>
    </C.Section>
  );
}
