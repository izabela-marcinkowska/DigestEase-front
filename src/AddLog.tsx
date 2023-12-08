import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { XCircle } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parseISO } from "date-fns";
import { useState } from "react";

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
  const [foodItems, setFoodItems] = useState<string[]>([]); // State to hold the list of food items
  const [currentFoodItem, setCurrentFoodItem] = useState(""); // State to hold the current input value

  const { handleSubmit, register, control } = useForm<Log>({
    defaultValues: {
      alcohol: false,
      pain: false,
      nausea: false,
      stress: 1,
      foodInput: [],
    },
  });

  const handleAddFoodItem = () => {
    if (currentFoodItem) {
      setFoodItems([...foodItems, currentFoodItem]);
      setCurrentFoodItem(""); // Clear the input after adding
    }
  };

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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submit behavior
      handleAddFoodItem();
    }
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              {...register("date")}
              placeholderText="Select date"
              onChange={(date) =>
                field.onChange(date ? format(date, "yyyy-MM-dd") : "")
              }
              selected={field.value ? parseISO(field.value) : null}
              dateFormat="yyyy-MM-dd"
            />
          )}
        />
        <div className="flex flex-col">
          <span className="label-text">Bowel Movements:</span>
          <select
            {...register("bowelMovements")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value="">
              Bowel Movements:
            </option>
            <option value="Bloated">Bloated</option>
            <option value="Normal">Normal</option>
            <option value="Diarrhea">Diarrhea</option>
          </select>
        </div>
        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Alcohol</span>
              <input
                {...register("alcohol")}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Pain</span>
              <input
                {...register("pain")}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Nausea</span>
              <input
                {...register("nausea")}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </label>
          </div>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Stress Level:</span>
          </div>
          <select {...register("stress")} className="select select-bordered">
            <option disabled>Stress level:</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </label>
        <div className="form-control">
          <div className="label">
            <span className="label-text">What did you eat today?</span>
          </div>
          <div className="flex gap-2">
            <input
              value={currentFoodItem}
              onChange={(e) => setCurrentFoodItem(e.target.value)}
              onKeyDown={handleKeyPress}
              type="text"
              placeholder="Type here"
              className="input input-bordered"
            />
            <button
              type="button"
              onClick={handleAddFoodItem}
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
          {foodItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default AddLog;
