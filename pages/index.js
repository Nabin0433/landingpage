import Head from 'next/head'
import { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import data from '../pageData.json'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (navOpen) {
      lockScroll()
    } else {
      removeLockScroll()
    }
  }, [navOpen])

  const lockScroll = () => {
    // document.body.classList.add('lock-scroll');
  }

  const removeLockScroll = () => {
    // document.body.classList.remove('lock-scroll');
  }

  const clickNav = (e) => {
    setNavOpen(false);
  }

  return (
    <>
      <Head>
        <title>Blue Peak Innovation</title>
        <meta name="description" content="technology , build , create , website , it , solutions" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#1a3950" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main id={data.section_1.id} className=''>
        {/* section 1 */}
        <nav className='lg:pl-4 w-full flex justify-between items-center bg-primary'>
          <img className='h-20 w-32 md:h-28 lg:w-44 object-contain' src={data.small_logo} alt="Blue Peak Innovation" title='Blue Peak Innovation' />
          <div className='hidden lg:flex text-white space-x-3 pr-20'>
            {data.navs.map(item => (
              <a key={item.id} href={`#${item.id}`} className='font-[Montserrat] text-[12px] lg:text-[16px] cursor-pointer hover:text-gray-300 hover:underline'>{item.name}</a>
            ))}
          </div>
          <div className='lg:hidden pr-2 pt-2'>
            <Menu right width={'280px'} onOpen={() => setNavOpen(true)} onClose={() => setNavOpen(false)} isOpen={navOpen}>
              <h2 className='text-[24px] absolute top-5 left-14'>Menu</h2>
              <div className='px-2 py-8 flex flex-col'>
                <Link href={`#${data.section_1.id}`} onClick={clickNav} className='font-[Montserrat] block text-[16px] cursor-pointer hover:text-gray-300 py-3'>Home</Link>
                {data.navs.map(item => (
                  <a key={item.id} href={`#${item.id}`} onClick={clickNav} className='font-[Montserrat] block text-[16px] cursor-pointer hover:text-gray-300 py-3'>{item.name}</a>
                ))}
              </div>
            </Menu>
          </div>
        </nav>
        <section className='bg-primary h-[650px] md:h-[720px] 2xl:h-[1000px]'>
          <div className='w-full h-full relative'>
            <img className='absolute md:ml-1 w-full h-[96%] -z-0 object-cover opacity-70' src={data.section_1.background_img} alt="background img" />
            <div className='flex justify-center items-center z-20 absolute inset-0'>
              <div className='text-white w-[330px] md:w-[800px] 2xl:w-[900px]'>
                <h2 className='text-[28px] md:text-[40px] 2xl:text-[45px]'>{data.section_1.title}</h2>
                <h3 className='text-[14px] md:text-[20px] 2xl:text-[25px] font-[Montserrat] mt-4'>{data.section_1.sub_title}</h3>
                <div className='flex justify-center mt-12 md:mt-16'>
                  <a link={data.section_6.id} className='border font-[Montserrat] text-[14px] 2xl:text-[18px] border-white h-12 2xl:h-14 flex items-center justify-center px-4 2xl:px-6 hover:border-gray-300'>{data.section_1.learn_more}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section id={data.section_2.id} className='h-[1050px] lg:h-screen bg-primary lg:flex min-h-[800px] max-h-[1000px]'>
          <div className='lg:h-full w-full lg:w-1/2 lg:ml-1'>
            <img className='w-full h-[300px] lg:h-full object-cover' src={data.section_2.background_img} alt='backgroun img' />
          </div>
          <div className='lg:h-full w-full lg:w-1/2 px-4 md:px-0 flex flex-col items-center justify-center'>
            <div className='text-white lg:w-[520px]'>
              <h2 className='text-[32px] 2xl:text-[40px] py-4'>{data.section_2.title}</h2>
              <hr />
              <div className='pl-4 lg:w-[490px] 2xl:w-[600px]'>
                <h3 className='text-[14px] md:text-[16px] lg:text-[14px] 2xl:text-[18px] font-light mt-4 font-[Montserrat] leading-normal'>{data.section_2.sub_title}</h3>
                {/* <p className='text-[28px] text-center my-4'>{data.section_1.learn_more}</p> */}
                <div className='flex gap-2 md:gap-8 items-start justify-center mt-12'>
                  {data.section_2.icons.map((item, index) => (
                    <div key={item.id} className='flex flex-col items-center justify-center'>
                      <img className='h-12 md:h-14 object-contain png-to-white' src={item.img} alt={item.name} />
                      <p style={{ width: index === 1 ? "80px" : "96px" }} className={`mt-4 text-center underline`}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section id={data.section_3.id} className='lg:h-screen py-12 md:py-0 bg-gray-200 px-4 lg:px-20 md:min-h-[1300px] lg:min-h-[880px] lg:max-h-[1000px] flex flex-col justify-center'>
          <h2 className='text-[26px] md:text-[32px] 2xl:text-[40px] text-primary text-left'>{data.section_3.title}</h2>
          <hr className='border-primary' />
          <div className='flex flex-col lg:flex-row gap-6 mt-8 lg:mt-6'>
            {data.section_3?.cards?.map(item => (
              <div key={item.id} className='bg-primary text-white w-full lg:w-1/3 max-h-[810px]'>
                <img className='w-full object-cover h-[200px] lg:h-[300px] 2xl:h-[400px]' src={item.img} alt="" />
                <p className='py-6 lg:py-8 px-10 lg:px-12 pb-10 lg:pb-12 leading-relaxed font-[Montserrat] font-semibold text-[14px] md:text-[16px] 2xl:text-[20px]'>{item.info}</p>
              </div>
            ))}
          </div>
        </section>
        {/* section 4 */}
        <section id={data.section_4.id} className='bg-primary px-4 lg:px-0 lg:h-screen h-[1120px] lg:min-h-[800px] max-h-[1150px] flex justify-center items-center'>
          <div className='flex flex-col-reverse justify-between lg:flex-row gap-3 lg:gap-24 max-w-[1300px] mx-auto'>
            <div className='w-full lg:w-1/2 text-white lg:mt-20'>
              <h2 className='text-[26px] lg:text-[40px] py-4'>{data.section_4.title}</h2>
              <hr />
              <ul className='px-8 lg:px-12 pt-8 list-outside list-disc'>
                {data.section_4.text_list.map(item => (
                  <li key={item.id} className='font-[Montserrat] text-[14px] md:text-[16px] 2xl:text-[20px] mt-2'>{item.text}</li>
                ))}
                <div className='flex justify-center mt-6'>
                  <a link={data.section_6.id} className='border font-[Montserrat] text-[14px] 2xl:text-[18px] border-white h-12 2xl:h-14 flex items-center justify-center px-4 2xl:px-6 hover:border-gray-300'>{data.section_1.learn_more}</a>
                </div>
              </ul>
            </div>
            <div className='w-full lg:w-1/2'>
              <ImageSlider images={data.section_4.background_img} />
              {/* {data.section_4.background_img.map(item => (
                <img key={item.id} className='w-full h-[400px] md:h-[500px] lg:h-[600px] object-contain' src={item.img} alt={item.name} />
              ))} */}
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section id={data.section_5.id} className='lg:h-screen min-h-[700px] lg:min-h-[800px] max-h-[1000px] relative'>
          <img className='absolute inset-0 w-full h-full object-cover z-0 opacity-50' src={data.section_5.background_img} alt="background img" />
          <div className='z-10 px-4 lg:px-32 absolute w-full h-full flex flex-col justify-center items-start'>
            <h2 className='text-primary text-[26px] lg:text-[32px] 2xl:text-[40px] pb-4'>{data.section_5.title}</h2>
            <hr />
            <div className='mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-4 justify-between gap-6 lg:gap-14'>
              {data.section_5.cards.map(item => (
                <div key={item.id} className='w-full border border-primary rounded-sm px-4 lg:px-8 pt-4 lg:pt-16 pb-4 lg:pb-4'>
                  <p className='text-center text-primary tracking-normal font-semibold font-[Montserrat] text-[14px] lg:text-[16px] 2xl:text-[20px]'>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section id={data.section_6.id} className='bg-primary h-screen min-h-[900px] lg:min-h-[800px] lg:flex max-h-[1000px]'>
          <div className='h-[300px] lg:h-full w-full lg:w-1/2 relative'>
            <img className='w-full h-full object-cover' src={data.section_6.background_img} alt='backgroun img' />
            <img className='object-contain h-32 w-52 lg:h-44 lg:w-60 absolute -top-8 -left-6 lg:left-0' src={data.logo} alt='backgroun img' />
          </div>
          <div className='w-full lg:w-1/2 px-4 md:px-8 lg:px-0 text-white py-8 flex flex-col items-center justify-center'>
            <div>
              <h2 className='text-[32px] py-4'>{data.section_6.title}</h2>
              <hr />
              <p className='mt-6 font-[Montserrat] text-[14px] 2xl:text-[18px]'>{data.section_6.location}</p>
              <p className='mt-2 font-[Montserrat] text-[14px] 2xl:text-[18px]'>{data.section_6.email}</p>
              <p className='pl-8 lg:pl-20 w-[300px] md:w-[500px] lg:w-[400px] 2xl:w-[600px] mt-8 lg:mt-12 font-semibold leading-relaxed font-[Montserrat] text-[14px] 2xl:text-[18px]'>{data.section_6.sub_title}</p>
              <div>
                <h4 className='font-[Montserrat] text-[16px] font-semibold mt-20 lg:mt-28'>{data.section_6.social.title}</h4>
                <div className='flex gap-4 mt-4 items-center'>
                  {data.section_6.social.icons.map(item => (
                    <a key={item.name} href={item.link}>
                      <img className='w-6 h-6 object-contain png-to-white cursor-pointer' src={item.img} alt={item.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}