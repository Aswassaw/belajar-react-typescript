import { useState } from "react";
import { Event } from "./Event";
import { Greet } from "./Greet";
import { Heading } from "./Heading";
import { Optional } from "./Optional";
import { Oscar } from "./Oscar";
import { Person } from "./Person";
import { PersonList } from "./PersonList";
import { Status } from "./Status";
import { Style } from "./Style";

function PropsComp() {
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

export default PropsComp;
