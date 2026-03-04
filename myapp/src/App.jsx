import Hello from './Hello.jsx';
import Drink from './Drink.jsx';
import MyComponent from './MyComponent.jsx';
import MyComponent2 from './MyComponent2.jsx';

export default function App() {

  return(
    <>
      <MyComponent2 isLoggedin={true} />
      <MyComponent2 isLoggedin={false} />
      <MyComponent />
      <Drink drink='coffee' />
      <Hello firstName='Jone' lastName='Doe'/>
      <Hello firstName='Gildong' lastName='Hong'/>
      <Hello firstName='Young' lastName='Kim'/>
    </>
  );
}