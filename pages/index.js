import Head from 'next/head';
import Image from 'next/image';
import CoinList from '../components/CoinList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home({coinData}) {
  // const [search, setSearch] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const searchHundler = (search) => {
  //   setSearch(search)
  //   if(search !== ""){
  //     const coinsList = coinData.filter((coin)=> {
  //       return Object.values(coin).join(" ").toLocaleLowerCase().includes(search.toLocaleLowerCase())

  //     });
  //     setSearchResults(coinsList)
  //   }else{
  //     setSearchResults(coinData)
  //   }
  // };

  // const coinsSearch = coinData.filter(coin => 
  //   coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  //   )
  //   const hundleChange = e => {
  //     e.preventDefault();
  //     setSearch(e.target.value.toLocaleLowerCase())
  //   }

  return (
    <div className='h-screen  text-white'>
      <Head>
        <title>Crypto_Update</title>
        <meta name="description" content="Created by Ali" />
        <link rel="png" href="/binance.png" />
      </Head>
      <Header/>
        <SearchBar 
        // coinss = {search.length < 1 ? coinData : searchResults}
        // term={search} 
        // keyWord={searchHundler}
        />


        {coinData.map(coin => (
          <CoinList 
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
          price={coin.current_price}
          price_change={coin.price_change_percentage_24h}
          market_cap={coin.market_cap}
          volume={coin.total_volume}
          last_updated={coin.last_updated}
           />
        ))}
        
    </div>
  )
};
export const getServerSideProps = async( ) => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
  const data = await res.json();
  return {
    props:{
      coinData:data
    }
  }
}

