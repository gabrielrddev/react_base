import { dados } from "../../../LocalDB";
import "./styles.css";

export function ContentHome() {
  function somaEntrada() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.entrada;
    }, 0);
    return valorTotal;
  }

  function somaSaida() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.saida;
    }, 0);
    return valorTotal;
  }

  function somaValor() {
    let valorTotal = 0;

    dados.map(function (currentValue) {
      valorTotal = valorTotal + currentValue.total;
    }, 0);
    return valorTotal;
  }
  return (
    <div className="containerContentHome">
      <h1 className="titleContentHome">Home</h1>
      <div className="ContainerItensHome">
        <p className="titleContentText">Total de entrada: {somaEntrada()}</p>
        <p className="titleContentText">Total de entrada: {somaSaida()}</p>
        <p className="titleContentText">Total de entrada: {somaValor()}</p>
      </div>
    </div>
  );
}

