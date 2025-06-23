import AboutImg from '../../assets/about.png'
const About = () => {
    const config  = {
        line1: 'Hi, My name is Jayapriya Sendhilkumar. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS ',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Tailwind CSS, Bootstrap, JS and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB',
        link:'../../asssets/resume.pdf'
    }
    return(
        <section className='px-5 py-6 about-background text-white' id="about">
            <h1 className='text-4xl font-bold text-center mt-2 mb-2 uppercase'>About Me</h1>
            <div className="title-underline"></div>
            <div className="flex justify-center items-center">
                <div className='mr-4 content'>
                    <p className='pb-1'>{config.line1}</p>
                    <p className='pb-1'>{config.line2}</p>
                    <p className='pb-1'>{config.line3}</p>
                    <p className='pb-5'>You can view my resume <a className='btn border-b-4' href={config.link} download> Download</a></p>
                </div>
                <img src={AboutImg}  className='max-width-height hidden md:block rounded-full'/>
            </div>
            
        </section>
    )
}
export default About