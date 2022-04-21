import React from 'react'
import ReactDOM from 'react-dom'
import { books } from './Books'
import Book from './Book' // when it is a default export, you do not need the curly brace.
//adding css
import './index.css'
//declare variable
//const img = 'https://m.media-amazon.com/images/I/81rqFJVA5VL._AC_UL320_.jpg'

// Nested component and React tools.
function Booklist() {
  // what we are returning here is called jsx.
  // stateless functional component or DOM component
  // always return JSX

  //JSX rules
  //returns single element
  //div/section/article or fragment(<React.Fragment> or <></>)
  //use camelCase for HTML attributes
  // className instead of class
  //close every element
  // formatting

  return (
    //applying children property which is unique to a particular instance of a component
    //the property must be in between the opening and closing tag of the component.
    <section className='booklist'>
      {books.map((book) => {
        // return <Book img={book.image} title={book.title} author={book.author} /> method 1
        //below shows that the book component accepts book object
        // return <Book key={book.id} book={book} /> //method 2
        //the name in this object must be used to display the
        // component...the book object is now inside the props object(props.book.image). The book
        //object could be destructured.
        return <Book key={book.id} {...book} /> //method 3 the name in this object must be used to display the
        // component the attributes of book is now inside the props(props.image)
      })}
    </section>
  )
}

// const Greetings = ()=>{
//     return React.createElement('div',{},React.createElement('h1',{},'this is my react component using arrow function and createElement'));
// }

ReactDOM.render(<Booklist />, document.getElementById('root'))
