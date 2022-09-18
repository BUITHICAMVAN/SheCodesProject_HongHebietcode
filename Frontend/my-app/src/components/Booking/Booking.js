import "./Booking.css";
import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";

export default function Booking(props) {
  const [skillOptions, setSkillOptions] = useState([]);
  const [items, setItems] = useState([]);
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [skillRequirement, setSkillRequirement] = useState("");
  const [salary, setSalary] = useState("");

  React.useEffect(() =>{
    setSkillOptions(props.tags);
  },[props.tags]);

    const submitHandler = (e) => {
    e.preventDefault();

    console.log(job);
    console.log(location);
    console.log(skillRequirement);
    props.matching();
  };

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
          {props.title}
        </h1>
      </div>
      <div className="booking">
        <form onSubmit={submitHandler}>
          <div className="booking-input">
            <div className="input-item">
              <label htmlFor="">
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
              <input
                value={description}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-item">
              <input
                value={location}
                type="text"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="input-item">
              <input
                value={startDate}
                type="date"
                placeholder="Start Date"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="input-item">
              <input
                value={duration}
                type="number"
                placeholder="Duration"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="input-item">
              <select
                onChange={(e) => setSkillRequirement(e.target.value)}
              >
                <option value = "">Choose skills</option>
                {Object.keys(skillOptions).map((d, index) => {
                  return <option key={index} value={skillOptions[d].data.tag}>{skillOptions[d].data.tag}</option>
                })}
              </select>
            </div>
            <div className="input-item">
              <input
                value={salary}
                type="text"
                placeholder="Salary"
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

