import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import TableData from "./TableData";
import AddContacts from "./AddContacts";
import EditContacts from "./EditContacts";
import ViewContacts from "./ViewContacts";
import DltContact from "./DltContact";
import axios from "axios";

const userContext = createContext();

function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((result) => setContacts(result.data.users));
  }, []);

  console.log(contacts);

  return (
    <div >
      <userContext.Provider value={{contacts, setContacts}}>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<TableData />} />
            <Route path="/add" element={<AddContacts />} />
            <Route path="/edit/:id" element={<EditContacts />} />
            <Route path="/view/:id" element={<ViewContacts />} />
            <Route path="/delete/:id" element={<DltContact />} />
          </Routes>
        </BrowserRouter>
     </userContext.Provider>
    </div>
  );
}

export default App;
export {userContext}
