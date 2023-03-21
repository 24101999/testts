import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navgate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      return "";
    }
    axios.post("http://127.0.0.1:8000/api", {
      email,
      senha,
    });
    navgate("/admin");
  };

  return (
    <div className={styles.login}>
      <form onSubmit={login}>
        <label>
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="text"
            name="senha"
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
      <button type="button" onClick={() => navgate("/cadastro")}>
        Cadastro
      </button>
    </div>
  );
}

export default Login;
