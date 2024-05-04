
import './App.css';
import {Component} from 'react'
import EachItem from './componet.js'

class App extends Component{
  state = {details: [], rating: {}}

  componentDidMount(){
    this.getDetails()
  }

  getDetails = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    let data = await response.json();
    let newData = data.rating
    console.log(newData);

    this.setState({details: data, rating: newData})
  }

  render(){
    const {details, rating} = this.state
    console.log(details);
    console.log(rating);
    return(
      <div className='bg-container'>
        <h1>Products</h1>
        <div className='bg-container-1'>
          {details.map(eachItem => <EachItem details={eachItem} key={eachItem.id}/>)}
        </div>
      </div>
    )
  }
}



export default App;
