import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";

class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  };
}  

export default App;