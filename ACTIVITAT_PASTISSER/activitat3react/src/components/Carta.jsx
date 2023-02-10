import '../style/style.css';

const Carta = (props) => {
    return (
        <div className='general'>
            <div className='carta'>
                <div className='containerImg'>
                    <img src={require("../images/penne.jpg")} alt='' className='img'></img>
                </div>
                <div className='containerInfo'>
                    <h2 className='name'>{props.name}</h2>
                    <h3 className='treball'>{props.treball}</h3>
                    <p className='text'>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Carta;