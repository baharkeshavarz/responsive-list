import Footer from './components/layout/footer/Footer';
import UsersList from './components/users/UsersList';
import NavBar from './components/layout/navbar/NavBar';
import Container from './components/layout/container/Container';

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
