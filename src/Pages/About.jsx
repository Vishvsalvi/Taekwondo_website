import React from 'react'

const About = () => {
  return (
    <div>
<section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="Taekwondo"
            src="https://www.paralympic.org/sites/default/files/images/171020105248526_Amy%2BTruesdale.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          Taekwondo Association of Maharashtra (TAM) is a registered and only one authorise state Association of Maharashtra.

          </h2>

          <p className="mt-4 text-gray-600">
          TAM is working under the Taekwondo federation of India ( TFI ) affiliated by youth affairs and sports ministry, Government of India and Indian Olympic Association ( IOA ). Under the TAM organisation more than 32 district associations working in Maharashtra for the development of Taekwondo game. Taekwondo is her Olympic game and Maharashtra government included in 5% reservation for government jobs, also it is a most popular game in Maharashtra.
          </p>

        </div>
      </div>
    </div>
  </div>
</section>
    <div>
      <header className="bg-white relative top-12">
        <div className="px-4 py-8 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
         
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Always Excited To Talk To{" "}
              <span className="">You </span>
            </h1>
          </div>
        </div>
      </header>

      <section className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <address className="max-w-xl text-lg">
              TAM is working under the Taekwondo federation of India ( TFI ) affiliated by youth affairs and sports ministry, Government of India and Indian Olympic Association ( IOA ). Under the TAM organisation more than 32 district associations working in Maharashtra for the development of Taekwondo game. Taekwondo is her Olympic game and Maharashtra government included in 5% reservation for government jobs, also it is a most popular game in Maharashtra.
                  <div className="mt-4 font-bold ">
                    Virar (W): 1st Floor, Kashinjali Complex, Near Vitthal Mandir, Opp. HDFC Bank
                    <br/>
                    <span className="font-medium" >Mob: 9029640483</span>
                   
                    
                    
                  </div>
                  <div className="mt-4 font-bold ">
                  Virar (E): Basement, Pushpa Plaza, Besides Snehanjali Showroom, Station Road
                    <br/>
                    <span className="font-medium" >Mob: 9158978654</span>
                  </div>
                  <div className="mt-4 font-bold ">
                    Agashi Branch: H.R house, Agashi Road, Bhandar Pada
                    <br/>
                    <span className="font-medium" >Mob: 8390116527</span>
                  </div>
                  <div className="mt-4 font-bold ">
                    Padmakar Branch: 2nd Floor, Padmakar House, Opp Bank Of Baroda
                    <br/>
                    <span className="font-medium" >Mob: 9029640483</span>
                  </div>
              </address>

              <div className="mt-8">
               

                <address className="mt-2 max-w-xl text-lg">
                  <div className="mt-3">
                    Our office hours are Monday through Friday, 9am to 8pm. We
                    will do our best to respond to your inquiry within one
                    business day. You can also visit us at the above given addresses.
                    <br />
                  </div>

                </address>
              </div>
            </div>

            <div className="  rounded-lg lg: lg:col-span-3">
              <img
                src="https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHRlbGVwaG9uZSUyMGNhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <img src="Contact-us-HR-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

</div>
  )
}

export default About