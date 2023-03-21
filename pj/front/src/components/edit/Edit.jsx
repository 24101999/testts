import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Edit.module.css";
function Edit() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const param = useParams();
  const id = param.id;
  const nav = useNavigate();
  const editar = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      return "";
    } else {
      axios.put(`http://127.0.0.1:8000/update/${id}`, {
        email,
        senha,
      });
      nav("/admin");
    }
  };

  return (
    <div className={styles.edit}>
      <form onSubmit={editar}>
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
        <button type="submit">editar</button>
      </form>
    </div>
  );
}

export default Edit;
