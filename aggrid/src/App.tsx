import { useState } from 'react';
import axios from 'axios';
import { AgGridReact }from 'ag-grid-react';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import './App.css'
// 이상의 코드에서 ag-grid 관련 css를 전부 지웠습니다.

// 추가된 부분
import { ModuleRegistry, AllCommunityModule, themeQuartz, themeMaterial, themeAlpine } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);

type Repository = {
  id: number; // 고유값을 통해서 나중에 .map() 적용했을 때 사용
  full_name: string;
  html_url: string;
};

function App() {
  const [ keyword, setKeyword ] = useState('');
  const [ repodata, setRepodata ] = useState<Repository[]>([]);
  const [ columnDefs ] = useState<ColDef[]>([
    {field: 'id', sortable: false, filter: true}, 
    {field: 'full_name', sortable: true, filter: true}, 
    {field: 'html_url', sortable: true, filter: true},
    {
      field: 'full_name',
      headerName: '이동',
      cellRenderer: (params: ICellRendererParams) => (
        <button
          onClick={() => alert(params.value)}
        >
          Press Me ❤️
        </button>
      )
    }
  ]);

  const handleClick = () => {
    axios.get<{ items: Repository[] }>(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => setRepodata(response.data.items))
      .catch(error => console.log(error));
  }

  return (
    <div className='App'>
      <input type="text" onChange={e => setKeyword(e.target.value)} value={keyword}/>
      <button onClick={handleClick}>검색</button>
      <div
        style={{ height: 500, width: 850 }}
      >
        <AgGridReact 
          rowData={repodata}
          columnDefs={columnDefs} 
          theme={themeAlpine}
          pagination={true}
          paginationPageSize={5}
        />
      </div>
    </div>
  )
}

export default App