import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

 addContact = () => {
   let random = Math.floor(Math.random() * contacts.length)
   let randomresult = contacts[random]
   console.log(randomresult)
 }


  render() {
    console.log("json=", contacts)
    return (
      
      <div className="App" >
      <button onClick={this.addContact}>Add Random Contact</button>
        {contacts.map((el) => (<table>
          <p>{el.name}</p>
          <img src={el.pictureUrl}></img>
          <p>{el.popularity}</p>
        </table>)).splice(0, 5)}
      </div>
    );
  }
}

export default App;