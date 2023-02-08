import '../style/style.css'

const Header = (props) => {
    return (
        <h1>{props.header}</h1>
    );
}

function EstructuraHeader() {
    return (
        <div className='header'>
            <Header header="Activitat on hem de crear un component i passar diferents valors"/>
        </div>
    );
}

export default EstructuraHeader;