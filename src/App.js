import './reset.css';
import './App.css';

import Navigation from './Components/Navigation';
import LandingPage from './Components/LandingPage';
import Main from './Components/Main';
import Footer from './Components/Footer';

const itemList = [
  {
    id: 1,
    name: "Usługa 1",
    isNew: true
  },
  {
    id: 2,
    name: "Usługa 2",
    isNew: false
  },
  {
    id: 3,
    name: "Usługa 3",
    isNew: false
  },
  {
    id: 4,
    name: "Usługa 4",
    isNew: false
  },
  {
    id: 5,
    name: "Usługa 5",
    isNew: false
  },
  {
    id: 6,
    name: "Usługa 6",
    isNew: false
  },
]

const employeeList = [
  {
    id: 1,
    name: "Malina",
    surname: "Rutkowska",
    department: "dział",
    about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    id: 2,
    name: "Piotr",
    surname: "Kowalski",
    department: "dział",
    about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint consequatur, iure sequi exercitationem veniam perspiciatis necessitatibus illum nam suscipit optio quam dolorem mollitia itaque nihil ad perferendis laudantium libero dolor.",
    src: "https://randomuser.me/api/portraits/men/36.jpg",
  }
]

function App() {
  return (
    <>
      <Navigation />
      <LandingPage />
      <Main employeeList={employeeList} itemList={itemList} />
      <Footer />
    </>
  );
}

export default App;
