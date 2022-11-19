import { configureStore, createSlice } from '@reduxjs/toolkit'

let searchData = createSlice({
    name : 'searchData',
    initialState : [],
    reducers : {
        changeSearch(state, actions){
            return actions.payload;
        }
    }
});
export let {changeSearch} = searchData.actions

let searchQuery = createSlice({
    name : 'searchQuery',
    initialState : "",
    reducers : {
        changeQuery(state, actions){
            return actions.payload;
        }
    }

})
export let {changeQuery} = searchQuery.actions



export default configureStore({
  reducer: {
      searchData : searchData.reducer,
      searchQuery : searchQuery.reducer
  }
}) 