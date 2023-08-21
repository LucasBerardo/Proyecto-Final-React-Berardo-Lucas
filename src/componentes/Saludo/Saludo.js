import './styles.css';

const Saludo = ({ greeting }) => {
    return (
        <div className="saludo">
            <h1 className="saludo-principal">{greeting}</h1>
        </div>

    );
}

export default Saludo