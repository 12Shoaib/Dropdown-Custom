import abouthome from './aborthome.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AbortHome = () => {
    const navigate = useNavigate()
    const [data , setData] = useState([])
    const abortController = new AbortController()
  

    const fetchData = async() => {
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=10', {signal : abortController.signal})
            const data = await response.json()
            setData(data)
        }
        catch(error){
            if(error.name === 'AbortError'){
                console.log('mission aborted')
            }else{
                console.log(error , 'genral error')
            }
        } 
    }
    useEffect(() => {
        setTimeout(fetchData , 500)
    } , [])
    const homeClick = () => {
        navigate('/')
    }
    const productClick = () => {
        navigate('/products')
    }

    useEffect(() => {
        const cleanup = () => {
          abortController.abort();
        };
    
        return cleanup;
      }, []);
    

    return(
        <div className={abouthome.main_container}>
            <nav className={abouthome.navbar}>
                <h5 onClick={homeClick}>Home</h5>
                <h5 onClick={productClick}>Products</h5>
            </nav>
            <h2>Abort Controllers using React</h2>
            {
                data.map((element) => {
                    return <div> 
                        {element.title}
                    </div>
                })
            }

        </div>
    )
}

export default AbortHome