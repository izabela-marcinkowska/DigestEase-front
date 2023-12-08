// import { createClient } from "@supabase/supabase-js";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

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
      <h1>All logs here</h1>
    </div>
  );
}

export default Logs;
