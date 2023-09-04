import Input from "../Input";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { getBooks } from "../../server/books";
import { postFavorite } from "../../server/favorite";
import livroImg from '../../images/livro.png'


const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [researchedBooks, setResearchedBooks] = useState([])
    const [ books, setBooks] = useState([])
    
    async function fetchBooks(){
        const books = await getBooks()
        setBooks(books)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    
    async function insertFavorites(id){
        await postFavorite(id)
        alert(`Livro de id:${id} inserido`)
    }

    



    return(
        <SearchContainer>
        <Titulo>Já sabe por onde começar?</Titulo>
        <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
        <Input 
            placeholder="Escreva sua próxima leitura"
            onBlur={event => {
                const typedText = event.target.value
                const searchResult = books.length ? books.filter( book => book.nome.includes(typedText)) : []
                setResearchedBooks(searchResult)
            }}   
        >
        </Input>
            { researchedBooks.map( book => (
                <Result onClick={() => insertFavorites(book.id)}>
                    <img src={book.src}/>
                    <p>{book.nome}</p>
                </Result>
            ))}
        </SearchContainer>

    )
}

export default Search;