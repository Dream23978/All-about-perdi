import React from 'react'
import Headline, { Herosection, Title, Judul_Lagu1,Judul_Lagu2,Judul_Lagu3,Title2,
  Image_carousel,Title3,Stack,Sosmed} from "@/component/komponen"
import { Demo } from '@/components/ui/navbar';

const Page = () => {
  return (
    <div className="pt-16">
    <Demo/>
      <Headline/>
      <Herosection />
      <Title />
      <div className="flex flex-row justify-center gap-8 px-6 py-4 flex-wrap">
        <Judul_Lagu1/>
        <Judul_Lagu2/>
        <Judul_Lagu3/>
      </div>
      <Title2/>
      <Image_carousel/>
      <Title3/>  
      <Stack/> 
      <Sosmed/>
    </div>
  )
}

export default Page
