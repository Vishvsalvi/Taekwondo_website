import React from 'react'
import AboutCard from '../Components/AboutCard'
import President from '../Images/President.png'
import Vice_President from '../Images/Vice_President.png'
import Secretary_Gen from '../Images/Secretary_Gen.png'
import Treasurer from '../Images/Treasurer.png'
import Tech_committee from '../Images/Tech_committee.png'
import Member from '../Images/Member.png'
import Member_2 from '../Images/Member_2.png'
import Member_3 from '../Images/Member_3.png'


// style={{ display: "flex", justifyContent: "flex-end" }}
const Committee = () => {
  return (
    <div>

    <div>
        <AboutCard name={"Dr.Avinash Bargaje"} image={President} content={"President"}/>
    </div>

    <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AboutCard name={"Mr.Dulichand Meshram"} image={Vice_President} content={"Vice President"}/>
    </div>


    <div>
        <AboutCard name={"Mr.Milind Pathare"} image={Secretary_Gen} content={"Secretary General"}/>
    </div>

    <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AboutCard name={"Mr. Venkateshwarrao Karra"} image={Treasurer} content={"Treasurer"}/>
    </div>

    <div>
        <AboutCard name={"Mr.Subhash Patil"} image={Tech_committee} content={"Tech Committee Incharge"}/>
    </div>

    <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AboutCard name={"Mr.Niraj Borse"} image={Member} content={"Member"}/>
    </div>


    <div>
        <AboutCard name={"Mr.Ajit Gharge"} image={Member_2} content={"Member"}/>
    </div>

    <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <AboutCard name={"Mr.Satish Khemaskar"} image={Member_3} content={"Member"}/>
    </div>

    </div>
  )
}

export default Committee