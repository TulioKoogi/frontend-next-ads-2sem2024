import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Dashboard() {
  const user = {
    nome: "Tulio",
    idade: 28
  }
 
  return(
    <>
      <Header isLogged={true} user={user}/>
      <main className="p-5">
        <h1 className="text-3xl"> Dashboard </h1>
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
