import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { CustomInput } from "../../components";
import * as yup from "yup";

import * as C from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../../services/auth";

interface FormData {
  name: string;
  email: string;
  emailConfirm: string;
  password: string;
  passwordConfirm: string;
}

export function SignUp() {
  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    emailConfirm: yup
      .string()
      .required("Por favor confirme o seu email.")
      .oneOf([yup.ref("email")], "Seus emails não correspondem."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "Sua senha é muito curta."),
    passwordConfirm: yup
      .string()
      .required("Por favor confirme a sua senha.")
      .oneOf([yup.ref("password")], "Suas senhas não correspondem."),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleSignUp = (data: FormData) => {
    const signupObj = {
      email: data.email,
      password: data.password,
      name: data.name,
    };
    signup(signupObj);
  };

  return (
    <C.Section>
      <C.CenterBox>
        <C.Title>The Cinelist</C.Title>
        <C.FormBox>
          <h1>Faça seu cadastro</h1>
          <CustomInput
            name="name"
            control={control}
            placeholder="Insira seu nome..."
            required
          />
          <CustomInput
            name="email"
            control={control}
            placeholder="Insira seu email..."
            required
          />
          <CustomInput
            name="emailConfirm"
            control={control}
            placeholder="Confirme seu email..."
            required
          />
          <CustomInput
            name="password"
            type="password"
            control={control}
            placeholder="Insira sua senha..."
            required
          />
          <CustomInput
            type="password"
            name="passwordConfirm"
            control={control}
            placeholder="Confirme sua senha..."
            required
          />
          <C.ButtonSignup onClick={handleSubmit(handleSignUp)}>
            Registrar-se
          </C.ButtonSignup>
        </C.FormBox>
      </C.CenterBox>
    </C.Section>
  );
}
export default SignUp;
