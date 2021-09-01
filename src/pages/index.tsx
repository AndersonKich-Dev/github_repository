import React from 'react'
import { FormEvent, useState} from 'react'
import * as S from '../styles/AppStyles'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import api from '../api'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import toast from '../util/toastify'

export default function Home() {
  
  const [userName, setUserName] = useState('')
  const router = useRouter()

  async function handleApi(event: FormEvent){
    event.preventDefault()
    try{
      if(!userName) throw new Error('Please enter a username!')

      let status = '200'

    const response = await api.get(`/users/${userName}`)
      .then(response => {
        return response.data
      }) 
      .catch(err =>{
        if(err.response.status === 404) status= '404'
        if(err.response.status === 403) status= '403'
      })      
      
      if(status === '404'){
        throw new Error('User not found!')
      }

      if(status === '403'){
        throw new Error('Oh no! Something went wrong. Try again later!')
      }

      if (response.public_repos < 1) {
        throw new Error('Sorry you dont have public repositories!')
      }

      router.push({
        pathname:'/Content',
        query: {id: userName, avatar: response.avatar_url}
      }) 

    }
    catch(err){
     toast({ type: "error", message: `${err}`});
    }      
  }

  return (
    <S.Container>
      <h1>Repository <strong>Github</strong></h1>
      <S.SearchBox onSubmit={handleApi}>   
        <S.SearchBtn display={1}>
          <FaSearch/>
        </S.SearchBtn>
       
        <input type='text'
            placeholder='Search'
            value = {userName}
            onChange={e => setUserName(e.target.value)}
        />  

        <S.SearchBtn onClick={()=> setUserName('')} display={userName ? 1 : 0} disabled={!userName}>
          <IoClose />
        </S.SearchBtn>
      </S.SearchBox>
     <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
   
     />
    </S.Container>
  )
}


