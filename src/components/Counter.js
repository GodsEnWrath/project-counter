import React, { Component } from 'react'
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

export default class Counter extends Component {
    
    render() {
        const {title, task} = this.props
        return (
           <Button variant="outlined" color="secondary" className={useStyles} onClick = {task}>{title}</Button>
        )
    }
}
