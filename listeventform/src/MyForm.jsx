export default function MyForm() {

  const handleSubmit = event => {
    event.preventDefault(); // 기본동작 방지 -> 새창 안나오게 / form 제출이라는 기본 동작을 막았다.
    alert('Form Submit');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username"/>
      <input type="submit" value='제출'/>
    </form>
  );
}