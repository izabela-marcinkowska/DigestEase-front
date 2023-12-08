// import { createClient } from "@supabase/supabase-js";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { PlusCircle } from "lucide-react";
import Log from "./components/Log";

function Logs() {
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
      <Log />
    </div>
  );
}

export default Logs;
