import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import QuizFrame from './components/QuizFrame';
import LearnMoreSection from './components/LearnMoreSection';
import LineCarousel from './components/LineCarousel';

function App() {
  return (
    <>
      <Header></Header>
      <Timeline></Timeline>
      <LearnMoreSection></LearnMoreSection>
      <QuizFrame></QuizFrame>
      {/* <LineCarousel></LineCarousel> */}
      <Footer></Footer>
    </>
  );
}

export default App;
