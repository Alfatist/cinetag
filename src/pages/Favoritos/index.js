import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import videos from "json/db.json";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>Eis aqui seus filmes favoritos :) </Titulo>
      <section className={styles.container}>
        {" "}
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default Favoritos;
