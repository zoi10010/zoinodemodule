import React from 'react'

import { ZButton,ZButtonProgress } from 'zoinodemodules'
import '../src/index.css'
import AwesomeButtonStyles from "zoinodemodules/src/styles/index";

const App = () => {
  return <div style={{margin:100}}><ZButton style={{width : 100}}
  size="small"
  type="primary"
>
  Large
</ZButton>
<ZButtonProgress
  type="secondary"
  size="medium"
  action={(element, next) => console.log(next)}
>
  Primary
</ZButtonProgress>
</div>
}

export default App
