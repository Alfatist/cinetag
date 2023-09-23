import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Card id="1" titulo="Gato bonifácio" capa="https://github.com/alfatist.png" />
      <Rodape />
    </>
  );
}

export default Inicio;
