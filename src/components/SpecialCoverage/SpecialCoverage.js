import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const SpecialCoverage =()=> {
  const { searchTerm }= useParams();
  console.log('PARAMS -> ', searchTerm)

  useEffect(()=> {
    const getSearchTerm =async ()=> {
      try {
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=(${searchTerm}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)

        console.log(res)

      } catch (err) {
        if(err) console.log(err)
      }
    }
    getSearchTerm()
  },[])

  return (
    <section>
      SpecialCoverage
    </section>
  )
}

export default SpecialCoverage;
