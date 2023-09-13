import './Saludo.css';

function Saludo({ greeting }) {
    return (
    <section className='inicio'>

        <div className="saludo">
            <h1 className="saludo-principal">{greeting}</h1>
            
        </div>

        <div >

           <img src='/img/logo.jpg'/>

        </div>

    </section>
    )
}

export default Saludo