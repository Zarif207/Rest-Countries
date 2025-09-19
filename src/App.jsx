
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then (res => res.json())
function App() {
  return (
    <>
      <Suspense>
        <Countries></Countries>
      </Suspense>
    </>
  )
}

export default App
