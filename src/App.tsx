import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import howitworks from "./assets/howitworks.png";
import whatitis from "./assets/whatitis.png";

function App() {
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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={whatitis} alt="Album" className="w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">What is It?</h2>
          <p>
            Our platform is an innovative solution for individuals with
            Irritable Bowel Syndrome (IBS). It acts as a digital diary and
            analysis tool, helping users track and manage their IBS symptoms
            with ease. Using advanced AI, we simplify the tracking of food
            intake, bowel movements, and health indicators, making IBS
            management more accessible.
          </p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={howitworks} alt="Album" className="w-72" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How it works?</h2>
          <p>
            * Daily Tracking: Users log their food, bowel types, alcohol,
            medication, pain, stress levels, and feelings daily.{" "}
          </p>
          <p>
            * Data Analysis: With a click, the AI analyzes these inputs,
            correlating diet and stress with IBS symptoms.
          </p>{" "}
          <p>
            * Personalized Insights: Users receive customized feedback,
            identifying potential dietary triggers and offering IBS-friendly
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
