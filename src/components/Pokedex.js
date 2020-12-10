import { Component } from 'react';
import Axios from 'axios';

class Pokedex extends Component {
    constructor() {
        super()

        this.state = {
            pokemonName: 'pikachu',
            pokemonImage: ''
        }
    }

    async componentDidMount() {
        const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        this.setState({
            pokemonImage: res.data.sprites.front_default
         })
        // Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`).then(res => {
        //     // console.log(res.data.sprites.front_default);
        //     this.setState({
        //         pokemonImage: res.data.sprites.front_default
        //     })
        // })
    }

    async componentDidUpdate() {
        
        if (this.state.pokemonName === '') {
            return
        }
        if (prevState.pokemonName === this.state.pokemonName) {
            return
        }
        
        try {
            const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
            this.setState({
                pokemonImage: res.data.sprites.front_default
            })
        } catch (e) {
            console.log(e);
            this.setState({
                pokemonImage: ''
            })
        }
        
         
    }
    render() {
        return(
            <div>
                {/* input component 
                state to govern the input component
                state to hold the image this will be a url string
                that will become the src of an img tag
                img tag that references the image stored in state*/}
                <h1>Fischer-Price My First Pokedex </h1>
                <input 
                    value={this.state.pokemonName} onChange={(e) => 
                    {this.setState({pokemonName: e.target.value.toLowerCase()})}}
                />
                <div>
                    <img src={this.state.pokemonImage} alt="" />
                </div>

            </div>
        )
    }
}



export default Pokedex;