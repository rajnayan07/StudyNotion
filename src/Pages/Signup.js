import React from 'react'

import signupImg from "../Assests/signup.png"
import Templete from '../components/Templete'


const Signup = ({setIsLoggedIn}) => {
    return (
        <Templete
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
    )
}

export default Signup