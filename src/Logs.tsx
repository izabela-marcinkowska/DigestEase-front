// import { createClient } from "@supabase/supabase-js";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { PlusCircle } from "lucide-react";
import Log from "./components/Log";
import { useEffect, useState } from "react";

export type Log = {
  id: string;
  date: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
};

function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    async function getLogs() {
      const response = await fetch("http://localhost:3000/logs");
      const data = await response.json();
      setLogs(data);
    }
    getLogs();
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
        <h1 className="text-3xl">Logs</h1>
        <PlusCircle size={34} />
      </div>
      {logs.map((log: Log) => (
        <Log key={log.id} log={log} />
      ))}
    </div>
  );
}

export default Logs;
