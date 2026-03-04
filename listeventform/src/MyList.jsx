export default function MyList() {
  const data = [1,2,3,4,5];

  return(
    <ul>
      {
        data.map((elem, index) => 
          <li key={index}>List Item : {elem*2}</li>
        )
      }
    </ul>
  )
}