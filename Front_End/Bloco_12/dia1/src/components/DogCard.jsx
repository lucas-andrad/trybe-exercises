import { React, Component } from 'react'

class DogCard extends Component {
    constructor(){
        super();

        this.state = {
            image: '',
            loaded: false,
        }
    }

    componentDidMount() {
        this.renderDog()
    }


    renderDog = async () => {
        this.setState({ loaded: false })
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json();
        this.setState({ 
            image: data.message,
            loaded: true,
         })
    }

    render() {
        const { image, loaded } = this.state;
        return(
            <div>
                { loaded ? <img src={image} alt="Random dog"/> : <h1>Carregando...</h1> }
                <button onClick={this.renderDog}>Atualizar</button>
            </div>
        );
    }
}

export default DogCard;