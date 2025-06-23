
import {  AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { LiaGithubSquare,LiaInstagram  } from "react-icons/lia";

const Banner = ()=>{
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            instagram: 'https://instagram.com/jayapriya_sendhilkumar',
            facebook: 'https://facebook.com/jayapriya.eswari05',
            linkedin: 'https://in.linkedin.com/company/jayapriya-s-a4ab26115',
            github:'https://github.com/JayapriyaSiakumar'
        }
    }
    return(
        <section className="flex flex-col justify-center px-5 py-32 dark-background text-center">
            <h1 className="w-1/2 text-white text-6xl text-left">Hi, <br/>Im <span className='text-4xltext-bold'>Jayapriya</span>
            <p className='text-2xl mt-2'>I am a Full-Stack Developer</p>
            </h1>
            <div className='flex py-10 text-center text-slate-100'>
                <a href={config.social.linkedin} className='pr-2 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-2 hover:text-white'><LiaGithubSquare size={40}/></a>
                <a href={config.social.instagram} className='pr-2 hover:text-white'><LiaInstagram  size={40} /></a>
                <a href={config.social.facebook} className='pr-2 hover:text-white'><AiOutlineFacebook size={40}/></a>
            </div>
        </section>
    )
}
export default Banner