import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css'

export type Item = {
  product: string;
  amount: string;
}

function App() {
  const [ items, setItems ] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }


  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              Shopping List
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
}

export default App
