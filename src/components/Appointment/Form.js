import React from 'react';
import 'components/Appointment/styles.scss';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props) {
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
          /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        <InterviewerList
          interviewers={props.interviewers}
          value={props.value}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger >Cancel</Button>
          <Button confirm onSubmit={event => event.preventDefault()} >Save</Button>
        </section>
      </section>
    </main>

  )
}
