import Hello from './Hello.jsx';
import Drink from './Drink.jsx';
import MyComponent from './MyComponent.jsx';

export default function App() {

  return(
    <>
      <MyComponent />
      <Drink drink='coffee' />
      <Hello firstName='Jone' lastName='Doe'/>
      <Hello firstName='Gildong' lastName='Hong'/>
      <Hello firstName='Young' lastName='Kim'/>
    </>
  );
}