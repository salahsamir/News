import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { NewsApiSlice } from './features/News/NewsSlice'
import { GoldApiSlice } from './features/Gold/GoldSlice'
import { CurrencyApiSlice } from './features/Currency/CurrencySlice'

export const store = configureStore({
    ///root reducer
  reducer: {
   
    [NewsApiSlice.reducerPath]:NewsApiSlice.reducer,
    [GoldApiSlice.reducerPath]:GoldApiSlice.reducer,
    [CurrencyApiSlice.reducerPath]:CurrencyApiSlice.reducer
  },
  middleware:getDefaultMiddleware=>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(NewsApiSlice.middleware,GoldApiSlice.middleware,CurrencyApiSlice.middleware)
})




export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()