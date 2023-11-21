import {useState} from "react" 
import { IoIosArrowDropdownCircle } from "react-icons/io";
import style from "./dropdown.module.css"

const options = [ "Option1" , "Option2" , "Option3" , "Option4"]

function Dropdown() {
    const [isDropdownMenu , setIsDropdownMenu] = useState(false)
    const [isSelected , setIsSelected] = useState("Select The Charts")

    const handleSelect = (optionSelected) => {
        setIsSelected(optionSelected)
        setIsDropdownMenu(false) 
    }

  return (
    <div className={style.dropdown_container}>
        <div className={style.dropdown} onClick={() => setIsDropdownMenu(!isDropdownMenu)}>
        <h6 className={style.description}>Description</h6>
         {isSelected}  
        {isDropdownMenu ?<IoIosArrowDropdownCircle className={style.dropdown_icon} /> :
        <IoIosArrowDropdownCircle className={style.dropdown_icon_bottom} />}
        </div>
        {isDropdownMenu && <ul className={style.dropdown_options}>
        {
           isDropdownMenu &&
            options.map((element,i) => {
                return <li onClick={() => handleSelect(element)} className={style.option} key={i}>
                    {element}
                </li>
            })
        }
        </ul>}
    </div>
  )
}

export default Dropdown