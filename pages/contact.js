import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Navbar from '../components/Navbar.tsx';
import  Footer from '../components/Footer.tsx';
// import  PostCard from '../components/PostCard.js';
// import  Visalist from '../components/visalist';
// import { getSortedPostsData } from '../lib/posts';

export default function Contact () {
    return (
        <div>
            <Navbar transparent={false} />
            <div className="hero-contact">
                <div className="hero-text">
                <h1 className="text-2xl md:text-5xl">Contact Us</h1>
                <h3 className="text-xl" >Let's Plan your journey together</h3>
                <button className="bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-80 hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded">Start a Conversation</button>
                </div>
            </div>
            

            <div className="flex flex-row justify-center items-center pt-0 pb-16 bg-white">
            <div className="w-full -mt-24 px-8 md:px-16 text-center item-center align-center">
                <div className="relative grid grid-cols-4  flex-initial min-w-0 break-words bg-gray-200 w-full mb-8 shadow-lg rounded-lg">
                    <div className=" col-span-4 md:col-span-2 m-2 py-5 md:ml-10 rounded-lg">
                        <Form />
                    </div>

                    <div className=" col-span-4 md:col-span-2 py-8 m-2 px-6 md:mt-24 flex flex-col flex-wrap justify-start">                    
                        <div className="relative flex justify-around content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Book 15-Min Consultation (Free)
                            </h6>
                            <button className="red text-white border text-xl font-semibold p-2 rounded">Book Now</button>
                        </div>

                        <div className="relative flex justify-around content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Book 1 hour Consultation ($150)
                            </h6>
                            <button className="red text-white border text-xl font-semibold p-2 rounded">Book Now</button>
                        </div>

                        <div className="relative flex justify-around content-around item-baseline py-4 px-4 mb-8 shadow-2xl bg-white rounded-lg">
                            <h6 className="text-2xl item-start m-3 font-semibold item-end">
                            Assesment Form (Express Entry)
                            </h6>
                            <button className="red text-white border text-xl font-semibold p-2 rounded">Book Now</button>
                        </div>   
                    </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}


const Form = () => <section>
    <form class=" shadow-2xl rounded w-full  px-8 pt-6 pb-8 mb-4">
    <h1 className="text-4xl font-semibold mb-4">Get in touch</h1>
    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="phone">
        Phone
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="email">
        E-mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="subject">
        Subject
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" />
    </div>

    <div class="mb-4">
      <label class="block text-left text-sm font-bold mb-2" for="message">
        Message
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Your Message Here" />
    </div>


    <div class="flex items-center justify-between">
      <button class="red hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </form>
</section>