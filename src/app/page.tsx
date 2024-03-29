import Image from 'next/image';
import bg from '../../public/march16.jpg'
import fp from '../../public/LandingPageFirst.jpg'
import BeforeAndAfter from './components/images/beforeAndAfter';
import AboutUs from './components/pages/AboutUs';
import Link from "next/link"
import FadeInSection from './components/functions/FadeInSection';

export default function Home() {

    return (
        <>
            <div
            id='#home'
             style={{

                backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.7), 
                rgba(0, 0, 0, 0.7)
              ),url(${bg.src})`,
                width: '100%',
            }}
                className={`box-border py-[26.5vh] flex w-full h-full`}>
                <div className={` flex items-center justify-between w-full h-full`}>
                    <div className='w-full pl-32'>
                    <FadeInSection>
                    <h1 className='text-8xl font-bold '>
                        Make your Concept  <br />
                        Structure come <br />
                        to Life
                        </h1><br /><br />
                        <p className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur cupiditate rerum. Pariatur dolores cumque illum explicabo dicta error eius !</p>
                    </FadeInSection>
                    </div>
                    <div className='w-3/4'>
                    <FadeInSection>
                        <BeforeAndAfter />
                    </FadeInSection>
                    </div>
                </div>
            </div >
            <div id='about'>
                
            </div>
            <AboutUs />
            <script
            type="text/javascript"
            src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></script>
        </>

    );
}