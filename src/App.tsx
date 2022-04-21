import React, {useState} from 'react';
import './App.css';
import List from "./components/List"

interface IState {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}

function App() {

    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Labron James",
            url: "",
            age: 39,
            note: "Can't touch this",
        }
    ])


    return (
        <div className="App">
            <h1>Users</h1>
            <List people={people}/>

        </div>
    );
}

export default App;
