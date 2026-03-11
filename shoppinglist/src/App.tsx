import { Container, AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import AddItem from './components/AddItem';
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
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item, index) => 
              <ListItem key={index} divider>
                <ListItemText 
                  primary={item.product}
                  secondary={item.amount}
                />
              </ListItem>
            )
          }
        </List>
      </Container>

    </>
  );
}

export default App
