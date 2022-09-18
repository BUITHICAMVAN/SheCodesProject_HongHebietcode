import "./Booking.css";
import Select from "react-select";
import React, { useState } from "react";
import { FaPeopleArrows } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { MdOutlineLuggage } from "react-icons/md";

export default function Booking() {
  const [items, setItems] = useState([]);
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [skillRequirement, setSkillRequirement] = useState("");
  const [salary, setSalary] = useState("");

  const skillOptions = [
    {
      value: "swimming",
      label: "Swimming",
    },
    {
      value: "first-aid",
      label: "First-aid",
    },
    {
      value: "au-pair",
      label: "Au-pair",
    },
  ];

  const mySkillOptions = () => <Select skillOptions={skillOptions} />;

  const submitHandler = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: String(Math.random()),
        job: job,
        description: description,
        location: location,
        startDate: startDate,
        duration: duration,
        skillRequirement: skillRequirement,
        salary: salary,
      },
    ]);
    setJob("");
    setDescription("");
    setLocation("");
    setStartDate("");
    setDuration("");
    setSkillRequirement("");
    setSalary("");
  };

  //
  const onCompleteHandler = (id) => {
    setItems(() => items.filter((item) => item.id != id));
  };

  return (
    <div className="booking-container">
      <div className="navbar">
        <FaLessThan href="#" style={{ fontSize: "14px" }} />
        <h1
          style={{ fontSize: "24px", fontWeight: "300", textAlign: "center" }}
        >
          Booking Info
        </h1>
      </div>
      <div className="booking">
        <form onSubmit={submitHandler}>
          <div className="booking-input">
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <label htmlFor="">
                <input type="text" placeholder="Job Type" />
                <select
                  value={job}
                  type="text"
                  placeholder="Job"
                  onChange={(e) => setJob(e.target.value)}
                >
                  <option value="Home to do">Home to do</option>
                  <option value="Yard work">Yard work</option>
                  <option value="Pet care">Pet care</option>
                  <option value="Clarity work">Clarity work</option>
                  <option value="Presence hiring">Presence hiring</option>
                </select>
              </label>
            </div>
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <input
                value={description}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <input
                value={location}
                type="text"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <input
                value={startDate}
                type="date"
                placeholder="Start Date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <input
                value={duration}
                type="number"
                placeholder="Duration"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <Select
                value={skillOptions}
                type="text"
                placeholder="Skill Requirements"
                onChange={(e) => setSkillRequirement(e.target.value)}
              >
                {mySkillOptions}
              </Select>
            </div>
            <div className="input-item">
              <MdOutlineLuggage
                style={{ fontSize: "24px", color: "#003E5A" }}
              />
              <input
                value={salary}
                type="text"
                placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            {/* <button onClick={handleClear}>Clear</button> */}
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
      <div className="items">
        {items.map((item, index) => (
          <Item key={index} item={item} onComplete={onCompleteHandler} />
        ))}
      </div>
    </div>
  );
}

function Item({ item, onComplete }) {
  const markDone = () => {
    onComplete(item.id);
  };

  return (
    <>
      <div className="todo">
        <div>{item.job}</div>
        <div>{item.location}</div>
        <div>{item.description}</div>
        <div>{item.startDate}</div>
        <div>{item.duration}</div>
        <div>{item.skillRequirement}</div>
        <div>{item.salary}</div>
        <button onClick={markDone}>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
