
import React from 'react'
import Image from 'next/image'
import sH from '../../../../public/SampleHouse.jpg'
import FadeInSection from '../functions/FadeInSection'



const AboutUs = () => {


    return (

        <div style={{
            width: '100%',
            height: `calc(100% - 80px)`,
        }}
            className={`box-border pl-[5vw] pt-[12.5vh] pb-[23.5vh] flex w-full h-full bg-slate-50 text-black`}>

            <div>
                <FadeInSection fadeFrom='X'>

                <h4 className=' px-[2vw] text-xl'>About us </h4>
                <div className={`bg-gray-100 w-[50vw] px-[2vw] pt-[4vh] pb-[25vh] shadow-lg`}>
                <FadeInSection fadeFrom='X'>
                    <h2 className='text-5xl font-bold '>
                        We Turn Ideas  <br />
                        Into Reality </h2><br /><br />
                    <p>
                        We apply innovative design solutions to enhance people’s residential well-being<br />
                        and to help workplaces succeed & achieve more in the comfortable environments!
                    </p><br />
                    <h3>
                        Our mission is to implement the outstanding design ideas and solutions
                        for any project we’re working on. During that process, we carefully combine client’s guidelines,
                        technical possibilities as well as the environmental issues. Engineering and interior design solutions that we deliver are
                        usually born after a collaborative process.
                    </h3>
                </FadeInSection>
                </div>
                </FadeInSection>
            </div>
            <FadeInSection fadeFrom='Y'>
            <Image src={sH}
            width={700}
            height={500}
            alt='sampleHouse'
            className='relative left-[2.5vw] h-[55vh] rounded-xl top-[5.5vh] shadow-2xl'></Image>
                            </FadeInSection>
        </ div>

    )
}

export default AboutUs