import './App.css';
import Header from './components/Header';
import MainBlocks from './container/MainBlocks';
import Under_header from './components/Under_header';
import Block_2 from './container/Block_2';
import Block_3 from './container/Block_3';
import Boxes from './components/Boxes';


let arr = [
  {
    id: 1,
    product: 'iPhone 13 Pro',
    desc: 'Oh. So. Pro.',
    img: 'https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg'
  },
  {
    id: 2,
    product: 'MacBook Pro 13',
    desc: 'Superchange by M2',
    img: 'https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg'
  },
  {
    id: 3,
    product: 'Watch',
    desc: 'SERIES 7',
    img: 'https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg'
  },
  {
    id: 4,
    product: 'iPad air',
    desc: 'Light. Bright. Full of might.',
    img: 'https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg'
  },
  {
    id: 5,
    product: 'iPhone 13 Pro',
    desc: 'Oh. So. Pro.',
    img: 'https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg'
  },
  {
    id: 6,
    product: 'iPhone 13 Pro',
    desc: 'Oh. So. Pro.',
    img: 'https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <Under_header/>
      <MainBlocks/>
      <Block_2/>
      <Block_3/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
      <Boxes/>
    </div>
  );
}

export default App;
