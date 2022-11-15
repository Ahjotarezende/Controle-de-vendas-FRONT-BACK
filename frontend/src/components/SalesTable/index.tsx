import NotificationButton from "../NotificationButton";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function SalesTable() {
  return (
    <>
      <h2>Vendas</h2>
      <div>
        <div className="pesquisas">
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <DatePicker
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="date"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="salesTable">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="showData">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="showData">28/06/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <NotificationButton />
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="showData">28/06/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <NotificationButton />
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="showData">28/06/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <NotificationButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SalesTable;
