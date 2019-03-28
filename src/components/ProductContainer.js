import React, { Component } from 'react'
import axios from "axios";
import Products from "./Products";

class ProductContainer extends Component {
      state = {
        items:[]
      }

      componentDidMount()
      {
        axios.get("http://www.json-generator.com/api/json/get/cqUrIJOTLS?indent=2")
              .then(response => this.setState({
                items:response.data
              }))
      }


      onRemove = (id) => {
        
       
        let removeItems = this.state.items.filter( r => r.id !==id)
        //console.log(removeItems)
        this.setState({
          items:removeItems
        })
      }


      render() {

        const productList = this.state.items.map(item => {
          return(<Products key={item.id} 
                            url={item.url} 
                            title={item.title} 
                            details={item.details} 
                            removeBox = {this.onRemove} />)
        })


        return (
          <React.Fragment>
           {productList}
         </React.Fragment>
        )
      }
}

export default ProductContainer
