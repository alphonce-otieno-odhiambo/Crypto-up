import React from 'react'
import Header from '../../components/Header';
import Link from 'next/link';


function Coin({coin}) {
   
  return (
   
   <div>
       
       <Link href="/">
       <div className='grid place-items-center '>
        <div className=''>
            <img src='https://media.gettyimages.com/photos/crypto-currency-picture-id914500450?s=612x612' alt='img'
            className='rounded-2xl text-center mt-5 p-4 cursor-pointer'
            layout='fixed'
            height={10}
            width={300}
            />
       </div>
       <br/>
       <br/>
    </div>
        </Link>
        <div className='grid place-items-center '>
            <div class="max-w-lg rounded overflow-hidden shadow-lg shadow-slate-100 p-8 pb-2 ">
                <img class="h-40 w-40 ml-4" src={coin.image.large} alt={coin.name}/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-white ml-6">{coin.name}
                        <p>{coin.symble} </p>
                        </div>
                        <p class="text-gray-700 text-base"></p>
                        
                        
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ali</span>
                    </div>
            </div>
        </div>
   </div>
    
  )
}


export default Coin;

export async function getServerSideProps(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    const data = await res.json();
    return {
        props: {
            coin: data
        }
    }
}