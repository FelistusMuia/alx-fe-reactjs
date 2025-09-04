import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // ✅ Import
import Counter from './components/ounter';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
     <Counter/>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Footer />
    </div>
  );
}

export default App;