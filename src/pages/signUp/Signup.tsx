import React, {useState} from "react";
import { Link, Navigate } from "react-router-dom";
import * as C from './styles'

export function SignUp () {
    const [email, setEmail] = useState('')
    const [emailConf, setEmailConf] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConf, setPassWordConf] = useState('')

    const handleSignUp = () => {
        const res = [email, emailConf, password, passwordConf]
        console.log(res)
        setEmail('')
        setEmailConf('')
        setPassword('')
        setPassWordConf('')
        alert('Cadastro realizado com sucesso!')
        };

        return (
        <C.Section>
        <C.CenterBox>
          <C.Title>The Cinelist</C.Title>
          <C.FormBox>
            <h1>Faça seu cadastro</h1>
            <C.InputSignup type={"text"}
                placeholder="Insira seu email..."
                value={email} 
                onChange = {(e) => setEmail(e.target.value)}
                required />
           <C.InputSignup type={"text"}
                placeholder="Confirme seu email..."
                value={emailConf}
                onChange={(e) => setEmailConf(e.target.value)} 
                required />
          <C.InputPassword type={"password"}
                placeholder="Insira sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
           <C.InputPassword type={"password"}
                placeholder="Confirme sua senha..."
                value={passwordConf}
                onChange = {(e) => setPassWordConf(e.target.value)}
                required/>
            <C.ButtonSignup onClick={handleSignUp}>Registrar-se</C.ButtonSignup>
        
          </C.FormBox>
        </C.CenterBox>
      </C.Section>
    );
  }
  export default SignUp;

