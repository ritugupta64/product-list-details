import React, { Component } from 'react'

class Products extends Component {

    state={
      toggle:false
    }


    onToggle = () => {
      this.setState({
        toggle:!this.state.toggle
      })
    }


   

   


  render() {
    let {url, title, details,id, removeBox} = this.props
    return (
      <React.Fragment>
        <div className="productName">
        <span className="cross" onClick = {()=> {removeBox(id)}}>
        <i className="fas fa-times-circle"></i>
        </span>
        


            <img src={url} alt={title}/>
            <h4 onClick={this.onToggle}>{title} <i className="fas fa-caret-square-down"></i>

</h4>

          
            <p style={{display:this.state.toggle?"block":"none"}}>{title}</p>
        </div>
    </React.Fragment>
    )
  }
}

export default Products
