import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/virgiawanara/hsbc-reactjs-assignment/posts')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='container mt-5'>
        <table className='table w-full text-sm text-left text-gray-500'>
            <thead>
                <tr className='text-xs text-gray-700 uppercase bg-gray-200'>
                    <th scope='col' className='px-6 py-3'>ID</th>
                    <th scope='col' className='px-6 py-3'>Name</th>
                    <th scope='col' className='px-6 py-3'>Country</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i)=> (
                    <tr key={i} className='capitalize bg-white border-b hover:bg-gray-50'>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{d.id}</td>
                        <td className='px-6 py-4'>{d.name}</td>
                        <td className='px-6 py-4'>{d.country}</td>
                    </tr>
                ))}
            </tbody>
        </table> 
    </div>
  )
}

export default Home
