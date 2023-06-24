import { Provider as ReduxProvider } from 'react-redux'

import { store } from './store'

export function App() {
  return (
    <ReduxProvider store={store}>
      <h1>app</h1>
    </ReduxProvider>
  )
}
