import Footer from './components/footer/Footer';
import UsersList from './components/users/UsersList';
import NavBar from './components/navbar/NavBar';
import Container from './components/layout/Container';

function App() {
  return (
    <>
     <NavBar/>
     <Container>
        <UsersList/>
     </Container>
     <Footer/>
    </>
  );
}

export default App;
