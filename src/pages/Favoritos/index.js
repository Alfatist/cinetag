import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import videos from "json/db.json";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>Eis aqui seus filmes favoritos :) </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
