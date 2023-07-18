import { useState } from "react";

export function ShipList(props) {
  const s = props.ships;
  const ShipList = props.ships.map((s) => {
    return (
      <div>
        <ShipListContainer
          ships={s}
          updateShip={props.updateShip}
          deleteShip={props.deleteShip}
        ></ShipListContainer>
      </div>
    );
  });

  return (
    <div style={{ disply: "flex", justifyContent: "left" }}>{ShipList}</div>
  );
}

function ShipListContainer(props) {
  const ship = props.ships;
  const [edit, setEdit] = useState(false);

  return edit ? (
    <div style={{ border: "1px solid black" }}>
      <form>
        <p>
          <label>
            Name
            <input
              type="text"
              defaultValue={ship.name}
              onChange={(e) => {
                ship.name = e.target.value;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Length:
            <input
              type="text"
              defaultValue={ship.length}
              onChange={(e) => {
                ship.length = e.target.value;
              }}
            />
          </label>
        </p>
        <p>
          <label>
            Width:
            <input
              type="text"
              defaultValue={ship.width}
              onChange={(e) => {
                ship.width = e.target.value;
              }}
            />
          </label>
        </p>
      </form>
      <button
        onClick={() => {
          setEdit(false);
          props.updateShip(ship);
        }}
      >
        Speichern
      </button>
    </div>
  ) : (
    <div style={{ border: "1px solid black" }}>
      <h3>{ship.name}</h3>
      <p>Length: {ship.length} Meter</p>
      <p>Width: {ship.width} Meter</p>
      <p>Code: {ship.code}</p>
      <button
        onClick={() => {
          setEdit(true);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.deleteShip(ship.code);
        }}
      >
        Delete
      </button>
    </div>
  );
}
