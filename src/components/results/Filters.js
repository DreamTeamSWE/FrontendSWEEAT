import "./Filters.css";
import Zona from "./Filtri/Zona.js";
import Punteggio from "./Filtri/Punteggio.js";

function handleClick(event) {
  //const data = await axios.get('api/foo')
  //setStudents({
  //data: data,
  //loading: false
  //})

  //fetch()
  console.log(event.target);
}

function Filters(props) {
  return (
    <div className="filtri">
      <form className="formFiltri" onSubmit={handleClick}>
        <Zona />
        <label>Cucina</label>
        <input
          type="text"
          className="cucinaText"
          placeholder="Inserisci il tipo di cucina"
        />
        <Punteggio />
        <input type="submit" className="salva" value="Applica Filtri" />
      </form>
    </div>
  );
}

export default Filters;
