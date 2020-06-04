// write your CatList component here
import React, {Component} from 'react';

class CatList extends Component{
  render(){
    return(
      <div>
        {this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={kat.id} />)}
      </div>
    )
  }
}
