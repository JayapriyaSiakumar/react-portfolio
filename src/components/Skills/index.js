import { FaHtml5,FaCss3,FaJs,FaBootstrap,FaReact   } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiStyledcomponents,SiRedux  } from "react-icons/si";
const Skills = () => {
    console.log('skills')
    return(
        <section className="px-5 py-6 about-background text-white" id="skills">
            <h1 className='text-4xl font-bold text-center mt-2 mb-2 uppercase'>Skills</h1>
            <div className="mt-4 mb-4 flex flex-wrap items-center justify-center">
                <div  class="col-span-4  card block max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"><FaHtml5 /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">HTML5</p>                        
                </div>
                <div class="col-span-4   card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FaCss3 /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">CSS</p>                   
                </div>
                
                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FaJs /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">JS</p>                   
                </div>
                
                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FaBootstrap /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Bootstrap</p>                   
                </div>
                
                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FaReact /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">React</p>                   
                </div>
                
                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><RiTailwindCssFill /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Tailwind CSS</p>                   
                </div>

                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><SiStyledcomponents /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Styled Components</p>                   
                </div>
                <div class="col-span-4 card block max-w-sm p-6 text-center bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><SiRedux /></h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Redux</p>                   
                </div>
            </div>
        </section>
    )
}
export default Skills