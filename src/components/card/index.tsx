import React,{ useState, useRef} from 'react'
import * as S from './styles'
import Bubble from '../bubble'
import { FaGithub, FaStar, FaBook,  FaBookOpen} from 'react-icons/fa'
import { CgGitFork } from 'react-icons/cg'
import { BsFileEarmarkZip } from 'react-icons/bs'
import { FiGitCommit, FiExternalLink, FiGithub  } from 'react-icons/fi'
import { HiClipboardCopy } from 'react-icons/hi'
import { ImBlocked } from 'react-icons/im'
import { CgGitCommit } from 'react-icons/cg'
import { Repository, CommitUrl } from '../../util/types'
import { useGlobalContext } from '../../context'
import Link from 'next/link'

type Props = {
  repository: Repository
}

const Cards = React.forwardRef<HTMLLIElement, Props>(( {repository} , ref) => {

  const { toogleCard } = useGlobalContext()
  const [displayBubble, setDisplayBubble] = useState(0)
  const [updateBtnPress, setUpdateBtnPress] = useState(0)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  
  const [book, setBook] = useState(<FaBook/>)
  
  function copyToClipboard() {
    textAreaRef.current?.select()
    document.execCommand('copy')
    setDisplayBubble(1)
  
    setTimeout(()=>setDisplayBubble(0), 2000); 
  };
  
  const onPressBtn = () => {
    setUpdateBtnPress(1)
    setTimeout(() => {
      setUpdateBtnPress(0)
    }, 300);
  }
  
  return (
    <S.Container ref={ref}>
    {!toogleCard ? 
      (
        <S.Card onMouseOver={()=> setBook(<FaBookOpen/>)} onMouseOut={()=> setBook(<FaBook/>)}>
          <S.SubCard>
            <S.MarkGit href={repository.html_url} target='_blank'>
              <FiGithub/>
            </S.MarkGit>
  
              <S.Title>
                {book}
                <h1>{repository.name.replace(/-/g, ' ')}</h1> 
              </S.Title>
              
            
              <S.CardInfo>
              <S.CardInfoItem>
                  <CgGitFork/>
                  <p>{repository.forks_count}</p>
  
                  <Bubble positionMode={'cardItem'} display={0} text='Forks'/>
              </S.CardInfoItem>
  
              <S.CardInfoItem>
                  <FiGitCommit/>
                  <p>{!repository.commits?.commit_length ? 0 : repository.commits?.commit_length}</p>
  
                  <Bubble positionMode={'cardItem'} display={0} text='Commits'/>
              </S.CardInfoItem>
  
              <S.CardInfoItem>
                  <FaStar/>
                  <p>{repository.stargazers_count}</p>
  
                  <Bubble positionMode={'cardItem'} display={0} text='Stars'/>
              </S.CardInfoItem>
              </S.CardInfo>
  
              <span>{'Criado em '+repository.created_at}</span> 
          
          </S.SubCard>
        </S.Card>
        )
        :
        (
          <S.CardDetail>
            <S.SubCardDetail>
                <S.GitAvatar href={repository.html_url} target='_blank'>
                  <FaGithub/>
                </S.GitAvatar>
    
              <h1>{repository.name.replace(/-/g, ' ')}</h1> 
    
              <S.DetailFlexBox>
                <S.Clipboard>
                  <textarea wrap="off" rows={1} ref={textAreaRef} defaultValue={repository.clone_url}/>
                  <button onClick={copyToClipboard}> 
                    <p>Git Clone URL</p>
                    <HiClipboardCopy/>
                  </button>
    
                  <Bubble positionMode={'clipboard'} display={displayBubble} text='Copied!'/>
                    
                </S.Clipboard>
    
                <Link href={`https://github.com/${repository.user}/${repository.name}/archive/refs/heads/master.zip`} passHref={true}>
                  <S.BtnDowload btnPress={updateBtnPress} onClick={onPressBtn}> 
                    <p>Dowload .Zip</p>
                    <BsFileEarmarkZip/>
                  </S.BtnDowload>
                </Link>
              
              </S.DetailFlexBox>
    
              <S.CommitBox>
              <span>
                <h4>Commit List</h4>
              </span>
    
              <ul>
                {
                  !repository.commits ? 
                  (
                    <S.CommitVoid>
                      <p>Este repositório não possui nenhum commit no momento!</p>
                      <ImBlocked/>
                    </S.CommitVoid>
                  )
                  :
                  (
                    repository.commits.commit_url.map((item:CommitUrl, index:number)=>(
                      <li key={index}>
                        <S.Commit>
                          <CgGitCommit/>
                          <p>{item.commitName}</p>
                          <p>{item.date}</p>
                          <S.CommitBtn href={item.commitUrl} target='_blank'>
                            <FiExternalLink/>
                          </S.CommitBtn>
                        </S.Commit>
                      </li>
                    ))
                  )
                }
              </ul>          
              </S.CommitBox>
              
            </S.SubCardDetail>
          </S.CardDetail>
          )
      }
      </S.Container>
  )
})
  
export default Cards



