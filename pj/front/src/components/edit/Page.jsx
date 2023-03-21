import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page.module.css";
function Page() {
  const nav = useNavigate();
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/get").then((res) => {
      setDados(res.data);
    });
  }, []);

  const deletar = (e) => {
    axios.delete(`http://127.0.0.1:8000/delete/${e}`);
    setTimeout(() => {
      axios.get("http://127.0.0.1:8000/get").then((res) => {
        setDados(res.data);
      });
    }, 300);
  };

  return (
    <div className={styles.page}>
      {dados
        ? dados.map((d) => {
            return (
              <div key={d.id} className={styles.elements}>
                <div className="">
                  <p>{d.email}</p>
                  <p>{d.senha}</p>
                </div>
                <div className={styles.buttons}>
                  <button
                    type="button"
                    onClick={() => {
                      nav(`/admin/edit/${d.id}`);
                    }}
                    className={styles.edit}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => deletar(d.id)}
                    className={styles.delete}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Page;
