import './App.css';
import Avatar from './components/Avatar';

function App() {
 
  

  return (
    <div className="App">
     <h1>Hello</h1>
     <Avatar
     name="Rashiytr"
     src="https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_1280.jpg"
     rounded={false}
     age={23}
     />

    <Avatar
     name="Tuokhdrgrsde"
     src="https://cdn.pixabay.com/photo/2016/12/13/00/13/rabbit-1903016_1280.jpg"
     rounded={true}
     age={25}
     address={{
      home:"TG Nagar, Mumbai",

    }}
    hobbies={["Eat","Sleep"]}
     />
    </div>
  );
}

export default App;
