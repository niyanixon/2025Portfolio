import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {motion} from 'framer-motion'

const NavBar = () => {
  return <nav className=" flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <motion.h2
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        className='logo'>NN</motion.h2>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href='https://www.linkedin.com/in/niya-nixon/'><FaLinkedin /></a>
      <a href='https://github.com/niyanixon'><FaGithub /></a>
      <a href='https://x.com/NiyaBNixon'><FaSquareXTwitter /></a>
    </div>
  </nav>
}

export default NavBar
