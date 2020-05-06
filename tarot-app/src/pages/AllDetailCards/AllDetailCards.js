import React, { Component } from 'react';
import './style.css';
import images from '../../data';

class AllDetailCards extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   data: ''
    // }
  }

  //   componentDidMount() {
  //     const id = this.props.match.params.id
  //     fetch('http://localhost:3001/api/items/' + id).then((result) => {
  //       return result.json()
  //     }).then((resultado) => {

  //       this.setState({
  //         data: resultado
  //       })
  //     })
  //   }


  render() {
    return (
      <div>
        {images.map(({ id, src, title, description }) =>
          // <img key={id} src={src} title={title} alt={description}
          <div>
          <img key={id} src={src}/>
          <div>{title}</div>
          <div>{description}</div>
          </div>
        )}
      {/* <div className="contenedor-principal">
        {this.state.data &&
          <div>

            <div className="detalle2">
              <div>
                <img className="imagen2" src={this.state.data.items.picture} alt="" />
              </div>
              <div className="texto">
                <div><p className="titulo2">{this.state.data.items.title}</p></div>
                <div><p className="precio2">$ {this.state.data.items.price.amount}</p></div>
                <div><button className="comprar-boton">Comprar</button></div>

              </div>
            </div>
            <div className="descripcion-container">
              <p className="texto-descripcion">Descripción del producto</p>
              <p className="descripcion">{this.state.data.items.description}</p>
            </div>

          </div>
        }
      </div> */}
      </div>
    )
  }
}



export default AllDetailCards;