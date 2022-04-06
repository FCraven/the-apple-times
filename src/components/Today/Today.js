import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Today =()=> {

  const [ articles, setArticles ] = useState([]);
  const [ isCoverageMenuOpen, setCoverageMenu ] = useState(false);
  const [ isEllipsisMenuOpen, setEllipsisMenu ] = useState(false);

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

        {/* HEADLINE COMPONENT*/}
        <li className='w-full flex flex-col bg-white dark:bg-slate-800 rounded-xl '>

          {/* CARD MAIN */}

          <article onClick={()=> console.log('clicked article')}>

            <img className='rounded-t-xl' src={mainHeadline?.multimedia[1]?.url} alt="" />

            {/* BODY */}

            <hgroup className='p-4'>

              {/* SECTION NAME */}
              <p className='text-medium font-extrabold text-blue-600 dark:text-yellow-600'>
                {mainHeadline?.section.toUpperCase()}
              </p>
              {/* HEADLINE */}
              <h1 className='text-3xl dark:text-slate-50 font-extrabold py-1'>
                {mainHeadline?.title}
              </h1>
              {/* SUBHEADING */}
              <h3 className='py-2 text-lg text-slate-500 dark:text-slate-100 font-light'>
                {mainHeadline?.abstract}
              </h3>

            </hgroup>

          </article>

          {/* Bottom Bar  */}

          <nav className='h-10 border-t flex items-center justify-between rounded-b-lg'>

            {/* MORE COVERAGE BUTTON  */}
            <NavLink  to={`/`}
                      onClick={()=> setCoverageMenu(!isCoverageMenuOpen)}
                      className={`relative flex items-center justify-center ${isCoverageMenuOpen? 'rounded-b-lg bg-slate-500/70': 'rounded-full'} bg-slate-500 px-4 mx-3 text-white text-md font-black`}>
              {isCoverageMenuOpen? 'CLOSE': `More coverage >` }

              {/* MENU CONTAINER */}
              {
                isCoverageMenuOpen &&
                  <ul className='absolute flex flex-col place-content-around left-0 bottom-6 h-auto w-96 bg-slate-500/70 backdrop-blur-sm pt-6 px-6 py-2 rounded-t-lg rounded-br-lg '>

                    { mainHeadline?.des_facet.map((el, index)=> {
                      return <li key={index} className='w-full flex justify-center items-center h-12 mb-2 rounded-lg bg-slate-500/300 backdrop-blur-md hover:border-b-1 hover:border-white'>{el}</li>
                    })}

                  </ul>
              }
            </NavLink>


            <FontAwesomeIcon  icon={faEllipsis}
                              size='xl'
                              className='dark:text-white px-4'
                              onClick={()=> setEllipsisMenu(!isEllipsisMenuOpen)}/>
          </nav>

        </li>
        {/* END MAIN HEADLINE */}

        {/* TODO: SIDE BY SIDE */}

        {/* REST OF TOP HEADLINES */}

        {
          articles.slice(1).map((el,index)=> {
            return (
              <li key={index} className='flex items-center justify-between border-b border-slate-500 my-2 '>
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
