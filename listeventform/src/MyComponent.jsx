export default function MyComponent() {
  const handleClick = () => {
    alert('Button Pressed !');
  }

  return (
    <>
      <button onClick={handleClick}>Press Me !</button>
    </>
  );
}