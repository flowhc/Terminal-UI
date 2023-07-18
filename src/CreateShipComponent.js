export function CreateShip(props) {
  let ship = {
    name: "New Ship",
    length: "100",
    width: "10",
    code: "AAAA-1234-A1",
  };

  return (
    <>
      <form>
        <label>
          Name:
          <input
            type="text"
            defaultValue="New Ship"
            onChange={(e) => {
              ship.name = e.target.value;
            }}
          />
        </label>
        <label>
          Length (m):
          <input
            type="text"
            defaultValue="100"
            onChange={(e) => {
              ship.length = e.target.value;
            }}
          />
        </label>
        <label>
          Width (m):
          <input
            type="text"
            defaultValue="10"
            onChange={(e) => {
              ship.width = e.target.value;
            }}
          />
        </label>
        <label>
          Code:
          <input
            type="text"
            defaultValue="AAAA-1234-A1"
            onChange={(e) => {
              ship.code = e.target.value;
            }}
          />
        </label>
      </form>
      <button
        onClick={() => {
          props.SaveShip(ship);
        }}
      >
        Create New
      </button>
    </>
  );
}
