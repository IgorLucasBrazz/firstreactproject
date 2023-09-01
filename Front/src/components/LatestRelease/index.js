import { books } from "./dadosLatestRelease";
import { Title } from '../Title'
import CardRecommends from "../CardRecommends";
import imgbook from '../../images/livro2.png'
import styled from 'styled-components'


const LatestReleaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function LatestRelease() {
    return(
        <LatestReleaseContainer>
            <Title 
            cor='#EB9B00' 
            tamanhoFonte="36px" 
            >Últimos Lançamentos</Title>
            <NewBooksContainer>
                {books.map ( book => (
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>
            <CardRecommends
                title="Talvez voce se interesse por..."
                caption="Angular 11"
                description= "Construindo uma aplicação com a plataforma Google"
                img={imgbook}
            />
        </LatestReleaseContainer>

    )
}

export default LatestRelease;