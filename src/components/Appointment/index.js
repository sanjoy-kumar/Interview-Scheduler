import React from 'react';
import 'components/Appointment/styles.scss'

import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import Form from 'components/Appointment/Form';
import Status from 'components/Appointment/Status';
import Confirm from 'components/Appointment/Confirm';
import Error from 'components/Appointment/Error';





export default function Appointment(props) {
  
  const result = props.interview ? <Show />:<Empty />


  return (
    <article className="appointment">

      <Header time={props.time} />
       {result}






    </article>
  );



}
