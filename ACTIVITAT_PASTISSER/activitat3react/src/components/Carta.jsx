import '../style/style.css';

const Carta = (props) => {
    return (
        <div className='carta'>
            <div className='containerImg'>
                <img src='' alt='' className='img'></img>
            </div>
            <div className='containerInfo'>
                <h3 className='name'></h3>
                <h5 className='treball'></h5>
                <p className='text'></p>
            </div>
        </div>
    );
}

function EstructuraCarta() {
    return (
        <div className='carta'>
            <Carta/>
        </div>
    )
}

export default EstructuraCarta;