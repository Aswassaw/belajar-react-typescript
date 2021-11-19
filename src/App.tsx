import { useState } from "react";
import "./App.css";
import { Event } from "./components/Event";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Optional } from "./components/Optional";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Style } from "./components/Style";

function App() {
  const [input, setInput] = useState("");

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
      {/* Props string, number, boolean */}
      <Greet name='Andry Pebrianto' age={18} isLoggedIn={false} />

      {/* Props object */}
      <Person name={personName} />

      {/* Props array of object */}
      <PersonList personListData={personList} />

      {/* Props onion */}
      <Status status='success' />

      {/* Props children bertipe string */}
      <Heading>Placeholder Text</Heading>

      {/* Props children bertipe react component */}
      <Oscar>
        <Heading>Heading ada di dalam Oscar</Heading>
      </Oscar>

      {/* Props optional */}
      <Optional />

      {/* Props function/event handler */}
      <Event
        handleIncrement={(e, id) => {
          console.log("Onclick - " + id);
          console.log(e.target);
        }}
        handleChange={(e) => {
          setInput(e.target.value);
          console.log(input);
        }}
        inputValue={input}
      />

      {/* Props style/css properties */}
      <Style styles={{ color: "red", backgroundColor: "skyblue" }} />
    </div>
  );
}

export default App;
