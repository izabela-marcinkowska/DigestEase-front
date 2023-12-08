import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Rapport from "./components/Rapport";

export type Rapport = {
  id: string;
  result: string;
  date: string;
};

function Rapports() {
  const [rapports, setRapports] = useState([]);
  useEffect(() => {
    async function getRapports() {
      const response = await fetch("http://localhost:3000/rapports");
      const data = await response.json();
      setRapports(data);
    }
    getRapports();
  }, []);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"}>
            <img src={logo} className="btn btn-ghost" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/logs"} className="text-xl">
                Logs
              </Link>
            </li>
            <li>
              <Link to={"/rapports"} className="text-xl">
                Rapports
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between m-10">
        <h1 className="text-3xl">Rapports</h1>
        <PlusCircle size={34} />
      </div>
      {rapports.map((rapports: Rapport) => (
        <Rapport key={rapports.id} rapport={rapports} />
      ))}
    </div>
  );
}

export default Rapports;
