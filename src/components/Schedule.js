import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ScheduleDetail from './ScheduleDetail';

const Schedule = (props) => {
  // state hook
  const [state, setSchedule] = useState([]);

  // effect hook
  useEffect(() => {
    const fetchSchedule = async (name) => {
      const url = `${process.env.REACT_APP_API_ROOT_URL}/core/v1/schedule/byname?name=${name}`;
      const response = await axios.get(url);

      // set state
      setSchedule(response.data);
    };

    fetchSchedule(props.movieName);
  }, [props.movieName]);

  return(
    <div>
      <h1>Schedule for {props.movieName}</h1>
      {
        state.length === 0 ? <p>Loading!</p> : state.map(movie => <ScheduleDetail key={movie._id} movie={movie} />)
      }
    </div>
  );
};

export default Schedule;