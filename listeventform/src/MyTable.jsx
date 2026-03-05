export default function MyTable() {
  const data = [
    {id: 1, brand: '현대', model: '그랜저'},
    {id: 2, brand: '기아', model: '셀토스'},
    {id: 3, brand: '람보르기니', model: '우라칸'}
  ];

  return(
    <>
      <table>
        <tbody>

          {
            data.map(car => <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.model}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
}