export default function App() {
  const divStyle = {color: 'red', background: 'yellow', width: 200, height: 200};
// style={}내부에 직접 JS 객체 형태로 property를 추가하는 것도 가능합니다.
  return (
    <div style={divStyle}>
      잠와보여서 밥 먹고 열심히 하자고 했는데 또 잠와보인다.
    </div>   
  )
}