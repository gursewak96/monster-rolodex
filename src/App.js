import {Component} from "react"
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/searchbox/search-box.component";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      "monsters":[],
      searchTerm: ""
    }
  }

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    console.log(result);
    this.setState({
      "monsters" : result
    })

    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render(){
    const {monsters, searchTerm} = this.state;
    const filteredList = monsters.filter(monster=> monster.name.toLowerCase().includes(searchTerm));
    return (
      <div className="App">
        <header className="App-header">
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder="search monters" handleChange={this.handleChange}/>
          <CardList monsters={filteredList}/>
        </header>
      </div>
    );
  }
  
}

export default App;
