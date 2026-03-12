import { useState } from 'react'
import { Container, AppBar, Toolbar, List, ListItem, ListItemText, Typography } from '@mui/material'
import AddItem from './components/AddItem'
import './App.css'

export type Item = {
  product: string;
  amount: string;
  price?: number;
}

function App() {
  const [ items, setItems ] = useState<Item[]>([]);

  const addItem = (item:Item) => {
    setItems([item, ...items]);
  }

  return (
    <>
      <Container>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h3'>
              장바구니
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
                  secondary={`수량 : ${item.amount} | 가격 : ${item.price}`}
                />
              </ListItem>
            )
          }
        </List>
      </Container>
    </>
  )
}

export default App
