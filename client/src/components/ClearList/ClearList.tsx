import {ContainerTitleClear, IconPencil, TitleClearList } from "./ClearList-style"



export const ClearList = () => {
  return (
    <ContainerTitleClear>
    <TitleClearList>Ваш список порожній, нижче ви можете створити свій таск </TitleClearList>
    <IconPencil>
        <use href="../svg/symbol-defs.svg#icon-pencil"></use>
    </IconPencil>
    </ContainerTitleClear>
  

  )
}
