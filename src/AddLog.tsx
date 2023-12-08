import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { XCircle } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";

type Log = {
  id: string;
  date: string;
  foodInput: string[];
  alcohol: boolean;
  bowelMovements: string;
  stress: number;
  pain: boolean;
  nausea: boolean;
};

function AddLog() {
  const { handleSubmit, register, control } = useForm<Log>();

  const onSubmit: SubmitHandler<Log> = (data: Log) => {
    // const response = await fetch("http://localhost:3000/add-log", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": 'application/json',
    //   },
    //   body: JSON.stringify(data)
    // });
    // }
  };

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
        <h1 className="text-3xl">Add log</h1>
        <Link to={"/logs"}>
          <XCircle size={34} />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) =>
                field.onChange(date ? format(date, "yyyy-MM-dd") : "")
              }
              selected={field.value ? parseISO(field.value) : null} // Parse the string to a Date object
              dateFormat="yyyy-MM-dd" // Display format in the picker
            />
          )}
        />
        {/* Other form fields */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddLog;
