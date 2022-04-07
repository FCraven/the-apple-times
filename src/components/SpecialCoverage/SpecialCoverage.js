import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const SpecialCoverage =()=> {
  const { searchTerm }= useParams();
  console.log('PARAMS -> ', searchTerm)

  useEffect(()=> {
    const getSearchTerm =async ()=> {
      try {
        const res  = await axios.get(`http://api.nytimes.com/svc/semantic/v2/concept/search.json?query=${searchTerm}&fields=article_list&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
        // const { response } = data
        // const { docs } = response;

        console.log('RESPONSE -> ', res)

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
