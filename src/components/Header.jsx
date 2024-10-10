import { VscGraph as Logo } from "react-icons/vsc";
import { FaRegUserCircle as IconUser} from "react-icons/fa";


export default function Header(props){
    return(
        <>
            <div className="flex bg-black h-14 items-center p-5 justify-between">
                <Logo className="text-orange-700 text-3xl"/>
                {props?.user && <p> {props.user?.nome} tem a idade {props.user?.idade}</p>}
                {props.isLogged && <IconUser className="text-white text-3xl"/>}
            </div>
        </>
    )
}