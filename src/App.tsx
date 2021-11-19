import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Optional } from "./components/Optional";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* Penggunaan props dasar */}
      <Greet name='Andry Pebrianto' age={18} isLoggedIn={false} />
      {/* Penggunaan props object */}
      <Person name={personName} />
      {/* Penggunaan props array of object */}
      <PersonList personListData={personList} />
      {/* Penggunaan props union */}
      <Status status='success' />
      {/* Penggunaan props children bertipe string */}
      <Heading>Placeholder Text</Heading>
      {/* Penggunaan props children bertipe react component */}
      <Oscar>
        <Heading>Heading ada di dalam Oscar</Heading>
      </Oscar>
      {/* Penggunaan props optional */}
      <Optional />
    </div>
  );
}

export default App;
