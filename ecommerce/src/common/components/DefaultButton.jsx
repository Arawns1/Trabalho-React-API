import { Button } from "./style"

export function DefaultButton(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <Button type={props.type}>Click Me</Button>
  )
}