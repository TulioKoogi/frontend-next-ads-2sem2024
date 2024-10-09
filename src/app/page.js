import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
 
  return(
    <>
      <Header/>
      <main className="p-5">
        <h1 className="text-3xl"> Sobre o React </h1>
        <Image src={'/img/React.webp'} width={400} height={400}/>
        <p>
          Escreva sobre React aqui
        </p>
        <p>
        Escreva sobre React aqui
        </p>
      </main>
      <Footer/>
    </>
  )
}
