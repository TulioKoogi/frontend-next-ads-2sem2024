import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
 
  return(
    <>
      <Header isLogged={false}/>
      <main className="p-5">
        <h1 className="text-3xl"> Sobre o React </h1>
        <Image
          src={"/img/React.webp"}
          width={300}
          height={300}
          alt="Logo do React"
        />
        <p>
          Escreva sobre React aqui
        </p>
        <p>
        Escreva sobre React aqui
        </p>
        <Link href="/dashboard">Dashboard</Link>
      </main>
      <Footer/>
    </>
  )
}
