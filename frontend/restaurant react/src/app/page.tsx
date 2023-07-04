import Calendario from './_calendar';
import Login from './_login';
import './home.css';
import './_menu';
import Menu from './_menu';

export default function Home() {
  return (
    <div className="container">
      <Login ></Login>
     

      <div className="content">
        <div className="grid-content">
          <img src="/logo.webp" alt="" />
          <div className="text">
            <p>
              O restaurante com mais sabor em Lisboa! <br />Consulte já o nosso
              menu e reserve já a sua mesa!
            </p>
            <Menu ></Menu>
    
          </div>
        </div>

        <div className="agendar">
          <p>Reserve já a sua mesa aqui!</p>

          <Calendario></Calendario>

          <form>
            <label htmlFor="fname">Nome:</label>
            <input type="text" id="fname" name="fname" />
            <br />
            <label htmlFor="appt">Horas</label>
            <input
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
              required
            />
            <br />
            <label htmlFor="femail">Email</label>
            <input type="text" id="femail" name="femail" />
            <br />
            <label htmlFor="ftelefone">Telefone</label>
            <input type="number" id="ftelefone" name="ftelefone" />
            <br />
            <button type="submit" className="button">Reservar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
