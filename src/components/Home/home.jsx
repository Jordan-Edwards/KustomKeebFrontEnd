import React, {Component} from "react"; 
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


class Home extends Component {

  state = {
    data: []
  }

  loadProducts = () => {
    axios({
      method: 'GET',
      headers: { Authorization: `Token ${this.props.token}`},
      url: 'http://127.0.0.1:8000/product',
      data: this.state.data
    })
    .then(
      data => {
        this.setState(data)
        console.log(this.state)
      }
    )
    .catch( error => console.error(error))
  }

  render() {
    return (
      <div>

      <h1>Home</h1>

      { this.state.data.map(
        products => {
          return <h3 key={products.id}> {products.title}</h3>
        }
      )
      }

      <button onClick={this.loadProducts}>Get Products</button> 

      </div>
    );
  }
}

export default Home;