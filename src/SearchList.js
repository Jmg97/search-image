import { bookSearch } from './api';
import { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {changeSearch} from "./store";
import { changeQuery } from './store';
import styled from 'styled-components'

let Box = styled.div`
  margin:auto;
`
let Header = styled.div`
width:100%;
height:50px;
background:#F1D3B3;
display: flex;
align-items: center;
justify-content: center;

`
let SearchBox = styled.div`
  display:flex;
  flex-wrap:wrap;
  width : 100%;
  margin:auto;

`

let SearchItemBox = styled.div`
   width:20%;
   height:100%;
`
let SearchItems = styled.img`
width:100%;
cursor:pointer;

`

function SearchList(){
    let states = useSelector((state) => {return state});
    let dispatch = useDispatch()

    console.log(states);    
    
    useEffect(() => {
        if(states.searchQuery.length > 0){
            seachHandler(true)
        }
    },[states.searchQuery]);

    const seachHandler = async () => {
        try{
          //parameter
          const params = {
            query : states.searchQuery,
            sort : 'accuracy',
            page : 1,
            size : 40,
          }
          const {data} = await bookSearch(params);
          dispatch(changeSearch(data.documents));
        } catch (e){
            alert(e);
        }
    };

    const handleOnKeyPress = e => {
        if(e.key == 'Enter'){
            searchImage(e.target.value);
        }
    }
    const searchImage = (text) => {
        dispatch(changeQuery(text));
    }

    return(
        <Box>
            <Header>
            <p>검색어를 입력해주세요!</p>
            <input type="text" onKeyUp={handleOnKeyPress}></input>
            </Header>
            <SearchBox>
              {
                states.searchData.map((items) => {
                  return(
                   <SearchItemBox key={items.image_url}>
                    <SearchItems src={items.thumbnail_url}></SearchItems>
                   </SearchItemBox>
                        )
                })
              }
            </SearchBox>
        </Box>
        
    )
}

export default SearchList;
    

