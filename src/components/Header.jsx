import { VscGraph as Logo } from "react-icons/vsc";


export default function Header(){
    return(
        <>
            <div className="flex bg-black h-14 items-center p-5">
                <Logo className="text-orange-700 text-3xl"/>
            </div>
        </>
    )
}