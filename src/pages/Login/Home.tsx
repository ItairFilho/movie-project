import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CustomInput } from "../../components";
import { signin } from "../../services/auth";

interface FormData {
  email: string;
  password: string;
}

export function Home() {
  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: FormData) => {
    signin(data);
  };
  
  return (
    <C.Section>
      <C.CenterBox>
        <C.Title>The Cinelist</C.Title>
        <C.FormBox>
          <h1>Faça o login</h1>
          <CustomInput
            name="email"
            control={control}
            placeholder="Insira seu email..."
            required
          />
          <CustomInput
            name="password"
            control={control}
            type={"password"}
            placeholder="Insira sua senha..."
            required
          />
          <C.ButtonLogin onClick={handleSubmit(handleLogin)}>
            Fazer login
          </C.ButtonLogin>

          <p>Não tem uma conta? Crie agora!</p>
          <Link to={"/signup"}>
            <C.ButtonSignup>Registrar uma conta</C.ButtonSignup>
          </Link>
        </C.FormBox>
      </C.CenterBox>
    </C.Section>
  );
}
