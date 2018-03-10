import React, { Component } from 'react';
import ListItem from '../ListItem/listItem';

class ListGenerator extends Component {
constructor(props) {
    super(props);
    this.state = {
        term : '',
        item : []
    };
    this.handleDelete = this.handleDelete.bind(this);
}
handleChange = (event) => {
    this.setState({term: event.target.value});
};
handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
        term: '',
        item: [...this.state.item, this.state.term]
    });
    console.log(this.state);
};
handleDelete = (i) => {
    this.state.item.splice(i,1);
    this.setState(this.state);
    console.log(this.state.item, i);
};

    render() {  
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.term} 
                        onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <ListItem 
                    items={this.state.item}
                    handleDelete={this.handleDelete} />
            </div>
        );
    }
}
export default ListGenerator;