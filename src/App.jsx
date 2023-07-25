import {useState} from 'react'
import "./App.css";
import contacts from "./contacts.json";

function App() {
const fiveContacts = contacts.slice(0, 5);
const [contactsData, setContactsData] = useState(fiveContacts);

const clickToAdd = () => {
  const minLength = 5;
  const maxLength = contacts.length;
  const randomIndex = Math.floor(Math.random()* (maxLength - minLength) + minLength)
  const updatedContacts = [...contactsData, contacts[randomIndex]];
  setContactsData(updatedContacts);
}

const sortPopularity = () => {
  const sortData = [...contactsData].sort((a, b) => b.popularity - a.popularity)
  setContactsData(sortData);
}

const sortName = () => {
  const sortedData = [...contactsData].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  setContactsData(sortedData);
}

const clickToDelete = (id) => {
  const filteredContacts = [...contactsData].filter((contact) => contact.id !== id);
  setContactsData(filteredContacts);
};

return (
    <div className="App">
      <h1>IronContacts</h1>
    
          <div key={contacts.id}>

          <button onClick={() => clickToAdd()} className='button'>Add Random Contact</button>
          <button onClick={() => sortPopularity()} className='button'>Sort by popularity</button>
          <button onClick={() => sortName()} className='button'>Sort by name</button>
          <br />
          <br />

            <table >
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contactsData.map((contact, index) => {
            return (
              <tr key={index} contact={contact} >
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt="actPict"
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? <p>🏆</p> : <p></p>}</td>
                <td>{contact.wonEmmy ? <p>🏆</p> : <p></p>}</td>
                <td><button onClick={() => clickToDelete(contact.id)} className='button'>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
          </div>
      
    </div>
)
}

export default App;
