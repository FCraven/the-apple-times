import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
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

  console.log(mainHeadline)
  return (
    <section className='block'>
      <h2 className='font-black bold text-3xl text-red-500 py-2'>Top Stories</h2>
      <ul>
        {/* headline */}
        <li className='w-full flex flex-col bg-white dark:bg-slate-800 t rounded-xl '>
          <img className='rounded-t-xl' src={mainHeadline?.multimedia[1]?.url} alt="" />
          <hgroup className='p-4'>
            <p className='text-medium font-extrabold text-blue-600 dark:text-yellow-600'>
              {mainHeadline?.section.toUpperCase()}
            </p>
            <h1 className='text-3xl dark:text-slate-50 font-extrabold py-1'>
              {mainHeadline?.title}
            </h1>
            <h3 className='py-2 text-lg text-slate-500 dark:text-slate-100 font-light'>
              {mainHeadline?.abstract}
            </h3>
          </hgroup>
          <nav className='h-10 border-t flex items-center justify-between rounded-b-lg'>
            <NavLink to={'/'} className='flex items-center justify-center rounded-full bg-slate-500 px-4 mx-3 text-white text-md font-black'>{`More coverage >`}</NavLink>
            <FontAwesomeIcon icon={faEllipsis} size='xl' className='text-white px-4'/>
          </nav>

        </li>
        {
          articles.slice(1).map((el,index)=> {
            return (
              <li key={index} className='flex items-center border-b border-slate-500 my-2 '>
                <div className='px-2 pb-2'>
                    <h3 className='text-lg font-black dark:text-red-100'>{el.title}</h3>
                </div>
                <img src={el.multimedia? el.multimedia[2].url : ''} alt="" className='rounded-lg h-24 w-24 ' />
              </li>
            )
          })
        }
      </ul>
    </section>

  )
}

export default Today;
