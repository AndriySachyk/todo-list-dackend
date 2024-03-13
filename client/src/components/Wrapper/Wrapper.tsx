// import React from 'react'
import { ClearList } from "../ClearList/ClearList"
import { Header } from "../Header/Header"
import { TodoList } from "../todo-list/TodoList"
import { MainPage } from "./Wrapper-style"

export const Wrapper = () => {
  return (
    <MainPage>
      <Header/>

        <ClearList/>
        <TodoList/>
    </MainPage>
  )
}
