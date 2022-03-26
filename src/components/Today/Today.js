import { useState, useEffect } from 'react'
import axios from 'axios'

const Today =()=> {

  const [ state, setState ] = useState({})

  useEffect(()=> {
    const getToday = async() => {
      try {
        const { data }= await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
        console.log('NYTIMES HOME DATA ==-->', data)
      } catch (err) {
        console.log('=================Unable to fetch data================\n', err)
        console.log('=================END ERROR===========================')
      }
    }

    getToday();
    
  }, [])
  return (
    <section>
      TODAY
    </section>

  )
}

export default Today;
