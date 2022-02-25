import React from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";


export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();
  const appointmentObjects = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  const appointment = appointmentObjects.map((appointmentObject) => {
    const interview = getInterview(state, appointmentObject.interview)

    return (
      <Appointment
        {...appointmentObject}
        key={appointmentObject.id}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    )
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
<<<<<<< HEAD
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
=======
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
//           bookInterview={bookInterview}
//           cancelInterview={cancelInterview}
        />
>>>>>>> 3e13c8f2efdc4bd6dee056eb13006caf5f45642b
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm"
        />
      </section>
    </main>
  );
}
