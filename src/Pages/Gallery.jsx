import React from 'react'
import Img1 from '../Gallery/Img1.jpg'
import Img2 from '../Gallery/Img2.jpg'
import Img3 from '../Gallery/Img3.jpg'
import Img4 from '../Gallery/Img4.jpg'
import Img5 from '../Gallery/Img5.jpg'
import Img6 from '../Gallery/Img6.jpg'
import Img7 from '../Gallery/Img7.jpg'
import Img8 from '../Gallery/Img8.jpg'
import Img9 from '../Gallery/Img9.jpg'
import Img10 from '../Gallery/Img10.jpg'
import Img11 from '../Gallery/Img11.jpg'
import Img12 from '../Gallery/Img12.jpg'


const Gallery = () => {
    return (
        <div>


            <section className="bg-white">
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="items-end justify-between sm:flex">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                                Gallery
                            </h2>


                        </div>


                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <img src={Img1} alt="Images" srcSet="" />
                        <img src={Img2} alt="Images" srcSet="" />
                        <img src={Img3} alt="Images" srcSet="" />
                        <img src={Img4} alt="Images" srcSet="" />
                        <img src={Img5} alt="Images" srcSet="" />
                        <img src={Img6} alt="Images" srcSet="" />
                        <img src={Img7} alt="Images" srcSet="" />
                        <img src={Img8} alt="Images" srcSet="" />
                        <img src={Img9} alt="Images" srcSet="" />
                        <img src={Img10} alt="Images" srcSet="" />
                        <img src={Img11} alt="Images" srcSet="" />
                        <img src={Img12} alt="Images" srcSet="" />


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery