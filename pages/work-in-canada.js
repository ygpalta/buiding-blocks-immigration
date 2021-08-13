import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';
import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head'
import  {VisaList} from '../components/visalist';

// export async function getlist() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getStaticProps({ params }) {
  const allPostsData = getSortedPostsData()  
    return {
      props: {
        allPostsData
      },
    }
  }

// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//       paths,
//       fallback: false
//     }
//   }

  
export default function Page({allPostsData }) {
    return (
        <div>
        <Head>
        <title>Work in Canada - Building Blocks Imigration</title>
        </Head>
            <Navbar transparent={false} />
            <div style={{ 
              backgroundImage: `url(/images/work-permit-lmia.jpg)`,
              height: "400px",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              borderRadius: "0.5rem",
               }} >
                <div className="hero-text">
                    {/* <h1 className="text-2xl md:text-5xl">{postData.title}</h1> */}
                </div>
            </div>

            <div className="flex flex-row justify-center items-center -mt-48 md:-mt-24 pb-16 bg-gray-100">
            <div className="w-full px-4 text-center item-center align-center">
                <div className="relative flex flex-row-reverse  flex-wrap min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="w-ful md:w-2/4 px-8 py-8 flex-auto">
                        
                        <h6 className="text-4xl mb-2 font-semibold leading-normal">
                        Work in Canada
                        </h6>
                        
                        <article  className="text-xl text-justify text-md list-inside">
                          <div className="text-lg leading-relaxed text-gray-800 mt-4 mb-4"  >
                            <p>Canada ranks as one of the best countries in the world due to low unemployment rates and an affordable cost of living compared to other developed countries. The Government of Canada has many programs under which people can come to Canada to work temporarily. Canadian workplaces are welcoming, inclusive, and diverse, with equal opportunities for everyone. Opportunities to gain experience, multicultural lifestyle, four-season weather, and many other factors make it inevitable to love working in Canada.</p>
                            </div>
                        </article>
                        
                    </div>
                    <div className="w-ful md:w-1/4 ml-3 mt-3 border-r-2 shadow-lg h-full border-gray-400 rounded-3xl">
                      <VisaList visas={allPostsData}/>
                      </div>
                    </div> 
                </div>
                {/* <div className="w-1/4 px-8 text-center item-center align-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-10 py-8 flex-auto">
                      <VisaList visas={allPostsData}/>
                      </div></div> */}
                {/* </div> */}
            </div>
            
            
            <Footer />
        </div>
    )
  }
