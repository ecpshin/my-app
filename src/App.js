import './App.css';
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';
import api from './services/api';

function App() {

  const [paises, setPaises] = useState([]);

  const supabase = createClient(api.url, api.api_key);

  useEffect(()=>{
    async function getCountries() {
      const countries = await supabase.from('countries').select()
      setPaises(countries.data)
    }
    getCountries();
  }, [supabase]);

  return (
    <div className="App">
      {
        paises.map((pais) => <p key={pais.id}>{pais.name}</p>)
      }
    </div>
  );
}

export default App;
