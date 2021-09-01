import React, { useEffect, useState} from 'react'
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import * as S from '../../styles/styles'
import { Repository, CommitData, CommitUrl } from '../../util/types'
import { Bubble, Card, Footer, Header, SkeletonLoadCard } from '../../components'
import { useGlobalContext } from '../../context'
import { FaSitemap, FaSearch, FaHome } from 'react-icons/fa'
import { BiDetail } from 'react-icons/bi'
import { MdUpdate } from 'react-icons/md'
import formatDate from '../../util/formatDate'
import api from '../../api'
import FlipMove from 'react-flip-move'

const Home = () =>{
const { query } = useRouter()
const [userName, setUserName] = useState<string | undefined>(query.id?.toString())
const [avatarUrl, setAvatarUrl] = useState<string | undefined>(query.avatar?.toString())
const [liberado, setLiberado] = useState(true)
const [defaultRepos, setDefaultRepos] = useState<Repository[]>([])
const [repos, setRepos] = useState<Repository[]>([])
const [search, setSearch] = useState('')
const [updateBtnPress, setUpdateBtnPress] = useState(0)
const { toogleCard, setToogleCard} = useGlobalContext()

async function handleGetRepositories() {
  try{
    await api.get(`/users/${userName}/repos`)
    .then(response => {
      let repositories:Repository[] = []
      response.data.map((item:Repository) => {
        const data:Repository = {
          user: userName,
          name:item.name,
          html_url:item.html_url,
          created_at: formatDate(item.created_at),
          clone_url: item.clone_url,
          stargazers_count: item.stargazers_count,
          forks_count: item.forks_count,
          size: item.size, 
          commits: null       
        }
        
        repositories.push(data)
      })

      setDefaultRepos(repositories)

      handleGetCommitList(repositories)
    })
  }
  catch(err){
    router.push('/')
  }

}

const handleGetCommitList = (repositories:Repository[]) => {
  repositories.map(async(item)=>{
    if(item.size > 0){
      await api.get(`/repos/${userName}/${item.name}/commits`)
      .then(response => {
          const length = response.data.length
          let commitArray:CommitUrl[] = []  
          
            response.data.map((item:any) => {
              commitArray.push({
              commitName:item.commit.message,
              date: formatDate(item.commit.author.date),
              commitUrl: item.html_url  
            })
          })
  
        let commitData:CommitData={
          commit_length: length,
          commit_url: commitArray
        }
         item.commits = commitData
      }).catch(err =>{
        console.log(err)
      })         
    }

  })

  awaitPromises(repositories)
}
   
const handleGetRepositoriesOnPressBtn = () => {
  setUpdateBtnPress(1)
  setTimeout(() => {
    setUpdateBtnPress(0)
  }, 300);
  handleGetRepositories()
}

const searchRepositoryName = () => {
  let repositories:Repository[] = defaultRepos
  if(search){
    const aux = repositories.filter((repo:Repository) => repo.name.toLowerCase().startsWith(search.toLowerCase()))
    
    if(aux.length > 0) setRepos(aux)

  }else{
    setRepos(repositories)
  }             
}

const awaitPromises = (repos:Repository[]) => {
  setTimeout(() => {
    setDefaultRepos(repos)
    setRepos(repos)
  }, 2000);
}

useEffect(()=>{
 handleGetRepositories()
},[])

useEffect(()=>{
 searchRepositoryName()
},[search])


  return (
    <S.Container>
         {!liberado ? (<div></div>): (
           <>
            <Header avatarUrl={avatarUrl} userName={userName}/>
        <S.Menu>
          <S.Search>       
            <S.SearchBtn>
                <FaSearch/>
            </S.SearchBtn>
            <input type='text'
                  placeholder= 'Search'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
            />        
          </S.Search>

          <S.ContainerMenuBtn >
            <Link href='/'>
              <S.MenuBtn>
                <input name='btn' id='home' type='radio' defaultChecked={!toogleCard}/>
                <label htmlFor='home' onClick={()=> setToogleCard(false)}>
                  <FaHome/>
                </label>   
                <Bubble positionMode={'contentMenuBtn'} display={0} text='Home page'/>         
              </S.MenuBtn>
            </Link>

            <S.MenuBtn>
              <input name='btn' id='itemap' type='radio' defaultChecked={!toogleCard}/>
              <label htmlFor='itemap' onClick={()=> setToogleCard(false)}>
                <FaSitemap/>
              </label>   
              <Bubble positionMode={'contentMenuBtn'} display={0} text='Repository list'/>         
            </S.MenuBtn>
          
            <S.MenuBtn>
              <input name='btn' id='detail' type='radio'/>
              <label htmlFor='detail' onClick={()=> setToogleCard(true)}>
                <BiDetail/> 
              </label>        
              <Bubble positionMode={'contentMenuBtn'} display={0} text='Repository details'/>               
            </S.MenuBtn>

            <S.BtnUpdate btnPress={updateBtnPress} onClick={handleGetRepositoriesOnPressBtn}>          
              <MdUpdate/>   
              <Bubble positionMode={'contentMenuBtn'} display={0} text='Update cards'/>                     
            </S.BtnUpdate>
          
          </S.ContainerMenuBtn>
        </S.Menu>

        <S.Main>
          {repos.length === 0 ? (
            <S.List>
            { defaultRepos.map((item:Repository, index:number)=>(
              <SkeletonLoadCard key={index}/>
              ))}
            </S.List>
          )
          :
          (
            <S.List>
            <FlipMove typeName={null}
                duration={750}
                staggerDurationBy={30}
                enterAnimation={'elevator'}
                leaveAnimation={'elevator'}
            >
          {
            repos.map((item:Repository, index:number)=>(
                <Card key={item.name} repository={item}/>
              ))}
            </FlipMove>
          </S.List>
          )}
        </S.Main>

        <Footer/>     
           </>
         )}
    </S.Container>
  )
}

export default  Home


