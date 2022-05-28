import React, { Component } from "react";
import * as C from "./styles";

export function Home() {
  return (
    <C.Section>
      <C.CenterBox>
        <C.Title>The Cinelist</C.Title>
        <C.FormBox>
          <h1>Faça o login</h1>
          <input type={"text"} placeholder="Insira o email aqui" />
          <input type={"text"} placeholder="Insira o email aqui" />
          <button>Fazer login</button>

          <p>Não tem uma conta? Crie agora!</p>
          <button>Registrar uma conta</button>
        </C.FormBox>
      </C.CenterBox>
    </C.Section>
  );
}
