import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"

export default function Tickers() {
 
  return(
    <>
      <Header isLogged={true} user={user}/>
      <main className="p-5">
        <h1 className="text-3xl"> Sobre o React </h1>
       
        
  
        <Link href="/dashboard">Dashboard</Link>
      </main>
      <Footer/>
    </>
  )
}
