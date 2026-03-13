import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api/carapi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function Carlist() {
  
  const columns: GridColDef[] = [
    {field: 'brand', headerName: 'Brand', width: 200,},
    {field: 'model', headerName: 'Model', width: 200,},
    {field: 'color', headerName: 'Color', width: 200,},
    {field: 'registrationNumber', headerName: 'Reg.No.', width: 200,},
    {field: 'modelYear', headerName: 'Year', width: 200,},
    {field: 'price', headerName: 'Price', width: 200,},
  ]

  const { data, error, isSuccess } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars
  });

  if(!isSuccess) {
    return <span>Loading ... ⏱️</span>
  }
  else if (error) {
    return <span>자동차 데이터를 가져오던 중 오류가 발생했습니다... 😂</span>
  }
  else {
    return(
      <DataGrid 
        rows={data}
        columns={columns}
        getRowId={row => row._links.self.href}
      /> 
    );
  }
}