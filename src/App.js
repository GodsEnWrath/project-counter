import React from 'react'
import CounterClass from './components/CounterClass'
import CounterFunction from './components/CounterFunction'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


export default function App() {
  return (
    <div>
       <CssBaseline />
      <Container>
      <CounterClass></CounterClass>
     <CounterFunction></CounterFunction>
     </Container>
    </div>
  )
}
