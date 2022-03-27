import { useState, useEffect } from 'react'
import axios from 'axios'

const Today =()=> {

  const [ articles, setArticles ] = useState([])

  useEffect(()=> {
    const getTodaysHeadlines = async() => {
      try {
        const { data } = await axios.get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
        setArticles(data.results)
      } catch (err) {
        console.log('=================Unable to fetch data================\n', err)
        console.log('=================END ERROR===========================')
      }
    }

    getTodaysHeadlines();
  }, [])

  console.log(articles[0])
  return (
    <section className='block'>
      <h2 className='font-black bold text-3xl dark:text-red-500'>Top Stories</h2>
      <ul>
        { articles.map((el,index)=> {
          return (
            <li key={index} className='flex border-b border-red-500 my-2'>
              <img src={el.multimedia[2].url} alt="" className='rounded-l-lg' />
              <div className='px-2 pb-2'>
                <h3 className='text-lg font-black dark:text-red-100'>{el.title}</h3>
                <h5 className='text-md font-medium dark:text-red-100'>{el.abstract}</h5>
              </div>
            </li>
          )
        })}
      </ul>
    </section>

  )
}

export default Today;
