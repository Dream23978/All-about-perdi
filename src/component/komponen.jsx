'use client'
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion';

const Headline = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 w-2xs ml-10 md:w-fit md:mx-auto text-center hover:transform  hover:scale-105 transition-transform duration-300 mt-5 md:mt-8 lowercase">
      <h1 className="border-4 border-black px-8 py-4 text-3xl md:text-4xl md:px-10 md:py-5 font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] bg-white">
        Segalanya Tentang Ferdi
      </h1>
    </motion.div>
  );
}

const Title = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 w-2xs ml-10 md:w-fit md:mx-auto justify-center hover:transform  hover:scale-105 transition-transform duration-300 mt-5 md:mt-8">
      <h1 className="border-4 border-black px-8 py-4 text-3xl md:text-4xl md:px-10 md:py-5 font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] text-center bg-white">
        Musik Favorit perdian
      </h1>
    </motion.div>
  )
}

const Judul_Lagu1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      id="judul-lagu" className="flex flex-1 min-w-64 max-w-md md:max-w-md justify-center hover:transform hover:-translate-y-2 transition-transform duration-300 mt-5 md:mt-0">
      <div className="border-4 border-black px-8 py-4 md:py-6 text-3xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <div>hivi! - Mata ke Hati (live version)</div>
        <p className='normal-case font-normal tracking-normal text-xl mt-3'>Ini lagu emang ada suntikan semangat banget</p>
     </div>
    </motion.div>
  )
}

const Judul_Lagu2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 min-w-64 max-w-md md:max-w-md justify-center hover:transform hover:-translate-y-2 transition-transform duration-300">
      <div className="border-4 border-black px-8 py-4 md:py-6 text-3xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <div>Dua remaja Dua Cerita- Luthfi Aulia</div>
        <p className='normal-case font-normal tracking-normal text-xl mt-3'>Lagu ini sering di puter sama ferdi,
           apalagi pas lagi santai atau lagi nugas, lagu ini enak banget buat di dengerin sambil ngopi.</p>
     </div>
    </motion.div>
  )
}

const Judul_Lagu3 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 min-w-64 max-w-md md:max-w-md justify-center hover:transform hover:-translate-y-2 transition-transform duration-300">
      <div className="border-4 border-black px-8 py-4 md:py-6 text-3xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
        <div>Lugia- Memikat</div>
        <p className='normal-case font-normal tracking-normal text-xl mt-3'>Lagu ini bikin ngerasa banyak butterfly seketika.</p>
     </div>
    </motion.div>
  );
};

const Herosection = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full focus:outline-none"
    >
    <div className="flex w-full justify-center py-4 px-6 relative mt-5 md:mt-8 hover:transform hover:scale-[1.01] transition-transform duration-300">
      <div className="border-4 border-black px-8 py-6 md:py-10 md:px-12 text-3xl font-black capitalize tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] max-w-5xl md:max-w-4xl w-full bg-white">
        <div className="text-3xl md:text-4xl font-black capitalize tracking-widest text-black text-left">Ferdian Iswara - Information System Student</div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 mt-7 md:mt-10">
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 mx-auto md:mx-0">
            <Image src="/file.png" alt="Foto Ferdi" fill className="border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] md:drop-shadow-[10px_10px_0px_rgba(174,182,193,1)] object-cover" />
          </div>
          <p className='text-xl md:text-xl lg:text-2xl normal-case tracking-normal font-normal md:mr-10 text-justify leading-relaxed'>
            Haii, ini ferdian, dia demen banget main game kaya resident evil,
            valo &quot;meskipun bronze abadi ya&quot;, apalagi lagu-lagu dari penyanyi kaya Lugia, Luthfi Aulia demen banget,{" "}
            <a href="#judul-lagu" className="font-bold underline hover:opacity-70 transition-opacity">
              coba scroll kebawah deh
            </a>{" "}
            kalau pengen tau.
          </p>
        </div>
      </div>
    </div>
    </motion.button>
  );
};

const Title2 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 w-2xs ml-10 md:w-fit md:mx-auto justify-center hover:transform hover:scale-105 transition-transform duration-300 mt-10 md:mt-16 text-center">
      <h1 className="border-4 border-black px-8 py-4 text-3xl md:text-4xl md:px-10 md:py-5 font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] bg-white">
        Momen favorit
      </h1>
    </motion.div>
  );
}

const Title3 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex flex-1 w-2xs ml-10 md:w-fit md:mx-auto justify-center hover:transform hover:scale-105 transition-transform duration-300 mt-5 md:mt-16">
      <h1 className="border-4 border-black px-8 py-4 text-3xl md:text-4xl md:px-10 md:py-5 font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] bg-white">
        Ngodingnya perdian
      </h1>
    </motion.div>
  );
}

const Image_carousel = () => {
  return(
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      id="momen" className='flex flex-row flex-wrap gap-6 md:gap-8 ml-7 md:mx-auto md:justify-center md:max-w-6xl scroll-mt-20 mt-10'>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/ph.jpg" alt="Foto Ferdi" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/support.jpeg" alt="Support" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/GOOGLE.jpeg" alt="Google" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/WORKSHOP.jpg" alt="WORKSHOP" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/MAKASSAR.jpeg" alt="MAKASSAR" fill className="object-cover"/>
      </div>
      
      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/php.jpg" alt="lomba" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/yey.jpeg" alt="lomba" fill className="object-cover"/>
      </div>

      <div className='relative h-[200px] w-[320px] md:h-[220px] md:w-[350px] lg:h-[250px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/tikum.jpeg" alt="lomba" fill className="object-cover"/>
      </div>
      
      <div className='relative h-[350px] w-[320px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/lift.jpeg" alt="lomba" fill className="object-cover"/>
      </div>
      
      <div className='relative h-[350px] w-[320px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/yesjkt.jpeg" alt="lomba" fill className="object-cover"/>
      </div>
      
      <div className='relative h-[350px] w-[320px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/aww.jpeg" alt="lomba" fill className="object-cover"/>
      </div>
      
      <div className='relative h-[350px] w-[320px] md:h-[300px] md:w-[350px] lg:h-[350px] lg:w-[400px] border-2 border-black shadow drop-shadow-[8px_8px_0px_rgba(174,182,193,1)] hover:scale-105 transition-all duration-300'>
        <Image src="/aw12.jpeg" alt="lomba" fill className="object-cover"/>
      </div>

    </motion.div>
  );
};

const Stack = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex w-full justify-center py-8 px-6 mt-5 md:mt-8" id='ngoding'>
      <div className="border-4 border-black px-8 py-6 md:py-8 md:px-10 text-xl md:text-2xl font-bold tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] max-w-5xl md:max-w-4xl w-full flex flex-wrap gap-8 md:gap-10 justify-center items-center bg-white">
        <div className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white">
          <Image src="/react.svg" alt="React" fill className="object-contain p-1 md:p-2"/>
        </div>
        <div className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white">
          <Image src="/sql.png" alt="SQL" fill className="object-contain p-4"/> 
        </div>
        <div className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white">
          <Image src="/tail.png" alt="Tailwind CSS" fill className="object-contain p-3 md:p-3"/>
        </div>
        <div className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white">
          <Image src="/oy.jpg" alt="Tailwind CSS" fill className="object-contain p-3 md:p-3"/>
        </div>
        <div className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white">
          <Image src="/next.svg" alt="Next.js" fill className="object-contain p-3 md:p-3"/>
        </div>
      </div>
    </motion.div>
  );
};

const Sosmed = () => {
  return (
     <motion.div 
      initial={{ opacity: 0, x:-50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3,repeatType:'reverse'}}
      className="flex w-full justify-center py-8 px-6 mt-5 md:mt-8 mb-20" id='sosmed'>
        <div className="border-4 border-black px-8 py-6 md:py-8 md:px-10 text-xl md:text-2xl font-bold tracking-widest text-black shadow-[8px_8px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_rgba(0,0,0,1)] max-w-5xl md:max-w-4xl w-full flex flex-wrap gap-8 md:gap-10 justify-center items-center bg-white">
            <h1 className='hover:-translate-y-1 transition-transform w-full text-center md:w-auto md:mr-10'> Reach out ferdian!</h1>
            
            <a href="https://www.linkedin.com/in/ferdian-iswara-6568382aa/" target="_blank" rel="noopener noreferrer" className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white cursor-pointer block">
              <Image src="/linkedin.png" alt="linked" fill className="object-contain p-3 md:p-3"/>
            </a>

            <a href='https://www.instagram.com/ferd.ian12/' target='_blank' rel='noopener noreferrer' className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white cursor-pointer block">
              <Image src="/instagram.svg" alt="Instagram" fill className="object-contain p-3 md:p-3"/>
            </a>
            
            <a href='https://www.tiktok.com/@ferdian0874?_r=1&_t=ZS-95u9FYU0ACb' target='_blank' rel='noopener noreferrer' className="border-2 border-black w-24 h-24 shadow drop-shadow-[4px_4px_0px_rgba(174,182,193,1)] hover:-translate-y-2 transition-transform relative bg-white cursor-pointer block">
              <Image src="/tiktok.svg" alt="TikTok" fill className="object-contain p-3 md:p-3"/>
            </a>
        </div>
     </motion.div>
  )
}
  
export default Headline;
export { Herosection, Title, Judul_Lagu1,Judul_Lagu2,Judul_Lagu3,Title2,Image_carousel,Title3, Stack,Sosmed};
