import React from 'react'
import Link from 'next/link'

function CoinList({name,id, image, volume, price,symbol, market_cap,price_change, last_updated}) {
  return (
      <Link href='/coin/[id]' as={`/coin/${id}`} >
          <a>
    <div className=' flex items-center ml-60 pr-9 mr-60 border-y-2 border-solid-700 p-2 hover:bg-slate-400 hover:opacity-75 hover:-translate-y-px'>
        <div 
            className='flex  items-center  '>
            <div className='flex items-center pr-4'>
                <img 
                className='h-20 w-20 p-2 mr-12'
                src={image} alt={name}/>
                <h1 className='font-semibold font-serif w-[80px]'>{name} </h1>
                <p className=' w-[50px] mr-8 ml-8'>{symbol} </p>
            </div>
            <div className='flex   items-center pl-4 pr-4'>
                <p className='w-[110px] mr-6 flex-grow' > ${price}</p>
                <p className='mr-10 pr-10'>{volume.toLocaleString()} </p>
                {price_change < 0 ? (
                    <p className='text-red-900 w-10 mr-10'>{price_change.toFixed(2)}% </p>
                ) :(
                    <p className='text-green-900 w-10 mr-10'>{price_change.toFixed(2)}% </p>
                )}
                <p className='w-10 ml-8'>Mkt:{market_cap.toLocaleString()} </p>
            </div>
            <div className='pl-10 mr-8 w-[1000px]' >
                <h5 className='pl-32'>{last_updated} </h5>
            </div>
        </div>      
    </div>
    </a>
    </Link>
  )
}

export default CoinList