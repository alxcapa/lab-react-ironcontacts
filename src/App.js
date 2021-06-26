import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state ={
    contacts: contacts,
    first5: [...contacts].splice(0, 5)
  }



 addContact = () => {
   let difference = this.state.contacts.filter(x => !this.state.first5.includes(x));
 console.log('difference =',difference)
   let random = Math.floor(Math.random() * difference.length)
   let randomResult = difference[random]

   console.log(randomResult)
   this.setState ({
    first5: [...this.state.first5, randomResult]
   })
  
 }

 sortByName = () => {
  let sortedNames = this.state.first5.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
console.log ('sorted names =',sortedNames);

this.setState ({
  first5: sortedNames
})

 }
 


sortByPop = () => {
  let sortedPop = this.state.first5.sort(function(a, b){
    if(a.popularity > b.popularity) { return -1; }
    if(a.popularity < b.popularity) { return 1; }
    return 0;
})
console.log ('sorted pop =',sortedPop);

this.setState ({
  first5: sortedPop
})
   
 }
 
 deleteContact = () => {
//   //let difference = this.state.contacts.filter(x => !this.state.first5.includes(x));
// console.log('difference =',difference)


//   this.setState ({
//    first5: [...this.state.first5, randomResult]
//   })
 
}


  render() {
    console.log("json=", contacts)
    return (
      
      <div className="App" >
      <button onClick={this.addContact}>Add Random Contact</button>
      <button onClick={this.sortByName}>Sort by Name</button>
      <button onClick={this.sortByPop}>Sort by Popularity</button>
        {this.state.first5.map((el) => (<table>
          <p>{el.name}</p>
          <img src={el.pictureUrl}></img>
          <p>{el.popularity}</p>
        </table>))}
      </div>
    );
  }
}

export default App;