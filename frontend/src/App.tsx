import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dsahbard de vendas</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5  className="text-center text-secondary">Taxa de Sucesso</h5>
            <DonutChart />
          </div>
        </div>

        <h2 className="text-primary py-3">Todas as Vendas</h2>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
