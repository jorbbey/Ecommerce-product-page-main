import style from './style.css'
import Header from "./components/Header";
import Body from './components/Body';
import data from './data'

export default function App () {
    const { product } = data
   
    return  (
        <div className="relative h-screen md:shadow-2xl bg-white">
            <Header />
            <Body product={product}/>
        </div>
    ) 
}