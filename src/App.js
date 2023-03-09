// import './App.css';
import AuctionCard from './components/AuctionCard';
import FeaturedItemsCard from './components/FeaturedItemsCard';
import Header from './components/Header';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Header />
      <AuctionCard/>
      <FeaturedItemsCard/>
      <Box style={{padding:'20px'}}>
      </Box>
    </div>
  );
}

export default App;
