import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  Button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function CounterFunction() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button variant="outlined" color="primary" className={useStyles} onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button variant="outlined" color="primary" className={useStyles} onClick={() => {
        if(count <= 0){
          setCount(count=0)
        } else {setCount(count - 1)}
      }}>
        -
      </Button>
      <Button variant="outlined" color="primary" className={useStyles} onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
 }
