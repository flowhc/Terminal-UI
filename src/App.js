import "./App.css";
import { useEffect, useState } from "react";
import { CreateShip } from "./CreateShipComponent";
import { ShipList } from "./ShipListComponent";

function App() {
  const [ships, setShips] = useState([
    { name: "", length: "", width: "", code: "" },
  ]);

  const baseURL = "http://127.0.0.1:8080/Ship/";

  useEffect(() => {
    GetAllShips();
  }, []);

  const GetAllShips = () => {
    fetch(baseURL + "ReadAll")
      .then((response) => response.json())
      .then((data) => {
        setShips(data);
      });
  };

  async function DeleteShip(shipID) {
    let result = await fetch(baseURL + "Delete/" + shipID, {
      method: "Delete",
    });
    if (!result.ok) {
      alert("Error: Ship could not be deleted");
    }
    GetAllShips();
  }

  async function SaveShip(ship) {
    let result = await fetch(baseURL + "Create/", {
      method: "POST",
      body: JSON.stringify(ship),
    });
    if (!result.ok) {
      alert(
        "Error: Ship could not be created. Hint: Each code may exist only once!"
      );
    }
    GetAllShips();
  }

  async function UpdateShip(ship) {
    let result = await fetch(baseURL + "Update", {
      method: "PUT",
      body: JSON.stringify(ship),
    });
  }

  return (
    <div className="App">
      <body>
        <CreateShip SaveShip={SaveShip} />
        <ShipList
          ships={ships}
          updateShip={UpdateShip}
          deleteShip={DeleteShip}
        />
      </body>
    </div>
  );
}

export default App;
