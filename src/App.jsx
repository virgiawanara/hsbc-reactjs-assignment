import "./App.css";
import SearchComponent from "./components/SearchComponent";
import TableComponent from "./components/TableComponent";
import TitleComponent from "./components/TitleComponent";

function App() {
  state = {
    users: [
      {
        id: "1",
        name: "rooney",
        country: "england",
        age: "23",
      },
      {
        id: "2",
        name: "ronaldo",
        country: "portugal",
        age: "23",
      },
      {
        id: "3",
        name: "evra",
        country: "french",
        age: "27",
      },
      {
        id: "4",
        name: "vidic",
        country: "serbia",
        age: "27",
      },
      {
        id: "5",
        name: "ferdinand",
        country: "england",
        age: "30",
      },
      {
        id: "6",
        name: "carrick",
        country: "england",
        age: "27",
      },
      {
        id: "7",
        name: "hargeves",
        country: "england",
        age: "27",
      },
      {
        id: "8",
        name: "park",
        country: "korea",
        age: "27",
      },
      {
        id: "9",
        name: "tevez",
        country: "argentina",
        age: "24",
      },
      {
        id: "10",
        name: "nani",
        country: "portugal",
        age: "22",
      },
    ],
  };

  return (
    <div>
      <TitleComponent />
      <SearchComponent />
      <TableComponent users={this.state.users} />
    </div>
  );
}

export default App;
