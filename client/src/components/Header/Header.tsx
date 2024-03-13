import { Container, Title } from "./Header-style"
import { StatusBar } from "./StatusButton/StatusButton"
import { SwitchColor } from "./SwitchColor/SwitchColor"

export const Header = () => {
  return (
    <Container>
        <SwitchColor/>
        <Title>Task List </Title>
        <StatusBar/>
    </Container>
  )
}
