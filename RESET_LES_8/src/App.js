import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { useState } from 'react'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Articles } from './pages/Articles'
import { SingIn } from './pages/SingIn'
import { SignUp } from './pages/SignUp'



export function App () {
  const [theme, setTheme] = useState(defaultContext.theme)


  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <ThemeContext.Provider value={{
          theme
        }}>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<MainPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route
                  path=":chatId"
                  element={<ChatsPage />}
                />
              </Route>
              <Route path="articles" element={<Articles />} />
              <Route path="singin" element={<SingIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<h2>404 Page not FOUND</h2>} />
          </Routes>
        </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </>
  )
}