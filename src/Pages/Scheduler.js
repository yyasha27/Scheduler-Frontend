import Header from "../Components/Header";
import Calendar from "../Components/Calendar";
import CalendarState from "../Components/CalendarContext";
import TaskForm from "../Components/TaskForm";
import '../Styles/Scheduler.css';
import { BrowserRouter as Router,Route, Link,NavLink,Switch } from "react-router-dom";

export default function Scheduler() {
  
  return (
    <div className="container1">
      <CalendarState>
        <Header />
        <Calendar />
        <TaskForm/>
      </CalendarState>
          </div>
  );
}
