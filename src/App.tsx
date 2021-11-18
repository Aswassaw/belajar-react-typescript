import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    firstName: "Andry",
    lastName: "Pebrianto",
  };

  const personList = [
    {
      name: "Aldino Alung",
      job: "Kuliah",
      age: 19,
    },
    {
      name: "Bagad Ihwalubin",
      job: "Sales",
      age: 17,
    },
    {
      name: "Dewa Ananda",
      job: "Perantau",
      age: 20,
    },
  ];

  return (
    <div className='App'>
      <Greet name='Andry Pebrianto' age={18} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList personListData={personList} />
    </div>
  );
}

export default App;
