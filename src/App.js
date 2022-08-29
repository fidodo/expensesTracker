
import { Container } from 'reactstrap'

 import { ExpenseContextProvider } from "./GlobalState"

import Header from "./components/Header"
import Form from "./components/Form"
import List from "./components/List"


function App() {
  return (
    
   <ExpenseContextProvider>
       <Container>
        <Header />
        <Form />
        <List />
       </Container>
   </ExpenseContextProvider>

   
  );
}

export default App;





