import styles from "./Rodape.module.css";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <span>
        © Desenvolvido por <a href="https://github.com/alfatist">Alfatista</a>
      </span>
    </footer>
  );
}

export default Rodape;
