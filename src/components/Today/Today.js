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

  const mainHeadline = articles[0];
  return (
    <section className='block'>
      <h2 className='font-black bold text-3xl text-red-500 py-2'>Top Stories</h2>
      <ul>
        {/* headline */}
        <li className='w-full flex flex-col bg-white rounded-xl border border-black'>
          <img className='rounded-t-xl' src={articles[0]?.multimedia[1]?.url} alt="" />
          <hgroup className='p-4'>
            <p className='text-medium font-bold text-blue-600'>
              {mainHeadline?.section.toUpperCase()}
            </p>
            <h1 className='text-3xl font-extrabold py-1'>
              {mainHeadline?.title}
            </h1>
            <h3 className='py-2 text-lg text-slate-500 font-light'>
              {mainHeadline?.abstract}
            </h3>
          </hgroup>
        </li>
        { articles.map((el,index)=> {
          return (
            <li key={index} className='flex border-b border-red-500 my-2'>
              <img src={el.multimedia[2].url} alt="" className='rounded-l-lg' />
              <div className='px-2 pb-2'>
                <hgroup>
                  <h3 className='text-lg font-black dark:text-red-100'>{el.title}</h3>
                  <h5 className='text-md font-medium dark:text-red-100'>{el.abstract}</h5>
                </hgroup>
              </div>
            </li>
          )
        }).slice(1)}
      </ul>
    </section>

  )
}

export default Today;
