import Header from "./components/Header";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="tabelaResult">
            <SalesTable/>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
