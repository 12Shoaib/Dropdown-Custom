import abortproducts from './abortproducts.module.css'
import { useNavigate } from 'react-router-dom'

const AbortProducts = () => {
  const navigate = useNavigate()
  
  const homeClick = () => {
    navigate('/')
}
const productClick = () => {
    navigate('/products')
}
  return(
        <div className={abortproducts.main_container}>
             <nav className={abortproducts.navbar}>
                <h5 onClick={homeClick}>Home</h5>
                <h5 onClick={productClick}>Products</h5>
            </nav>

        </div>
  )  
}
export default AbortProducts