import './Saludo.css';
import Logo from '../Logo/Logo';

function Saludo({ greeting }) {
    return (
        <section className='inicio'>

        <div className="saludo">
            <h1 className="saludo-principal">{greeting}</h1>
            
        </div>

        <div>

       <Logo/>

        </div>

        </section>
    )
}

export default Saludo