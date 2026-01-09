import { useEffect, useState } from "react"

function App() {
  const [result, setResult] = useState("")

  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/hello")
    const data = await response.json()
    console.log(data)
    setResult(data.message)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Aaaa {result}</h1>
    </>
  )
}

export default App
