import Hello from './Hello.jsx';
import Drink from './Drink.jsx';
import MyComponent from './MyComponent.jsx';
import MyComponent2 from './MyComponent2.jsx';
import MyComponent3 from './MyComponent3.jsx';


export default function App() {

  return(
    <>
      <MyComponent3 isLoggedin={false} />
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