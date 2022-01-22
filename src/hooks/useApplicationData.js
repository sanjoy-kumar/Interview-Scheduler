import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, { SET_DAY,  SET_APPLICATION_DATA } from "reducers/application";

export default function useApplicationData(props) {
  
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: []
  });

  const setDay = day => dispatch({ type: SET_DAY, day: day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days")
    ]).then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data
      });
    });
  }, []);


  return {
    state,
    setDay
  };
}