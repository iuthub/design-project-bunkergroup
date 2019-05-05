import React, {Component} from 'react';
import { Button, Row, Col,Form, Container, Badge,Media,Image } from 'react-bootstrap';
import axios from 'axios'
import LinearProgress from '@material-ui/core/LinearProgress';

const API = 'https://cors-anywhere.herokuapp.com/http://34.76.166.90';

export default class EBooks extends Component{
    
    constructor(props)
    {
        super(props);

        this.state = {
        books: [],
        isLoading: true,
    }
    }

    
   componentDidMount(){
       
    if( localStorage.getItem('books') ){
        const storageBooks = localStorage.getItem("books");
        const booksStr = JSON.parse(storageBooks);
        this.setState({ books: booksStr, isLoading: false });
    } 
     else {
        if( localStorage.getItem('userData') ){
            var user = JSON.parse(localStorage.getItem('userData'));
            axios.post(`${API}/book/byFS`, {fs: user.data.fs})
            .then(res => {
            this.setState({books: res.data, isLoading: false});
            const booksStr = JSON.stringify(this.state.books);
            localStorage.setItem("books", booksStr);
            
            console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        console.log("Sorry, your localStorage is undefined!");
    }
    }
   }

    render(){
        return(
            <div>
            {this.state.isLoading ? <LinearProgress className="linearProgress"/> :   
            <div className='app'>
            <Container>
            <Row className='row'>
            {this.state.books.map(book =>

            <Col key={book.bookId} md={3} className='columns'>
            
            <button type="submit" variant='outline-primary' className="bookitems" size='lg'>
            <a href={book.bookUrl} target="_blank">
            <Media>
            <Media.Body>
            <p>{book.bookName} </p> 
            <Image className = "booklogos" src={book.bookPicUrl} thumbnail></Image>
            <p> {book.author}</p>
            </Media.Body>
           
            </Media>
            </a>
            </button>
            
            </Col>
            )}
            </Row>  

            </Container>               
            </div>
            }
            </div>
        )
    }

}