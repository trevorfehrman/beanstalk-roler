import React from 'react'
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const firebaseConfig = {
  apiKey: 'AIzaSyAJSOFA1YbigjxitdxoyJk4NlHdCMBe96Y',
  authDomain: 'beanstalk-roller.firebaseapp.com',
  databaseURL: 'https://beanstalk-roller.firebaseio.com',
  projectId: 'beanstalk-roller',
  storageBucket: 'beanstalk-roller.appspot.com',
  messagingSenderId: '62113214419',
  appId: '1:62113214419:web:13493f987bb3859ac9c926',
  measurementId: 'G-N9GQ6CRFS9',
}

const theme = extendTheme({
  colors: {
    brand: {
      green: '#41e694',
      yellow: '#fff178',
    },
  },
})

const AppProviders: React.FC = ({ children }) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<div>Loading...</div>} traceId={'loading-app-status'}>
        <ChakraProvider theme={theme} resetCSS>
          <Router>{children}</Router>
        </ChakraProvider>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  )
}

export { AppProviders }
