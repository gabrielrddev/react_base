import { dados } from "../../../LocalDB";
import "./styles.css";

export function ContentTransactions() {
  return (
    <div className="containerTransacoes">
      <h1 className="tituloTransacoes">Trasações</h1>
      <div className="tabela">
        {dados &&
          dados.map((item) => (
            <div key={item.codigo} className="linhaDaTabela">
              <p className="textoDaLinha">{item.codigo}</p>
              <p className="textoDaLinha">{item.descricao}</p>
              <p className="textoDaLinha">{item.entrada}</p>
              <p className="textoDaLinha">{item.saida}</p>
              <p className="textoDaLinha">{item.total}</p>
            </div>
          ))}
      </div>
    </div>
  );
}


