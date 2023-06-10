import './App.css'
import { DefaultButton } from './common/components/DefaultButton'
import ItemCarrinho from './common/components/itemCarrinho/itemCarrinho'

function App() {
  return (
    <>
      <div>
        Hello World
        <ItemCarrinho></ItemCarrinho>
      </div>
      <DefaultButton type={'sucess'}/>
      <DefaultButton type={'warning'}/>
    </>
  )
}

export default App
