import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
function Footer() {
    return ( <>
    <div className="footer-color  text-white text-center h-2/5">
        <div className='flex justify-center'>
            
        
    <div className=" py-5 mx-5">
      <h1 className='text-4xl'> <a href="https://www.instagram.com/vinay2001singh/" className='text-white'>< BsInstagram /></a></h1>
     
      </div>
      <div className=" py-5 mx-5">
      <h2 className='text-4xl'><a href="https://github.com/Vinay20621" className='text-white'>< BsGithub /></a></h2>      
     
      </div>
      
      <div className=" py-5 mx-5 ">
      <h2 className='text-4xl' ><a href="https://portfolio-fh8s.onrender.com/" className='text-white'>< AiOutlineHome/></a></h2>  
       </div>
       <div className=" py-5 mx-5">
      <h2 className='text-4xl'><a href="https://www.linkedin.com/in/vinay-singh-01259722b" className='text-white'><  AiFillLinkedin/></a></h2>  
       </div>
       </div>
       <h5 className='text-2xl pb-3'> <i className="bi bi-c-circle "></i>@Copyright All Rights Reserves</h5>
    </div>
   
   
    
    </> );
}

export default Footer;