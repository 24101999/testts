import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Cadastro() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const cadastro = (e) => {
    e.preventDefault();
    if (!email || !senha || !nome) {
      nav("/cadastro");
    } else {
      axios.post(
        "http://127.0.0.1:8000/insert",
        {
          nome,
          email,
          senha,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-Token": "csrf-token",
          },
        }
      );
      nav("/");
    }
  };

  return (
    <div className={styles.cadastro}>
      <form onSubmit={cadastro}>
        <label>
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
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
        <button type="submit">Cdastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
