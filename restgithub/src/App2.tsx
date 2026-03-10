import { useState } from 'react';
import axios from 'axios';
import './App.css'

type Repository = {
  id: number; // 고유값을 통해서 나중에 .map() 적용했을 때 사용
  full_name: string;
  html_url: string;
};

function App() {
  const [ keyword, setKeyword ] = useState('');
  const [ repodata, setRepodata ] = useState<Repository[]>([]);

  const handleClick = () => {
    axios.get<{ items: Repository[] }>(`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => setRepodata(response.data.items))
      .catch(error => console.log(error));
  }

  return (
    <>
      <input type="text" onChange={e => setKeyword(e.target.value)} value={keyword}/>
      <button onClick={handleClick}>검색</button>
    </>
  )
}

export default App