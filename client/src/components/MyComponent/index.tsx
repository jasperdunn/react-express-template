import { theme } from 'common/theme'
import styled from 'styled-components'

export function MyComponent(): JSX.Element {
  return <Heading>My component</Heading>
}

const Heading = styled.h2`
  color: ${theme.color.secondary.foreground};
`
