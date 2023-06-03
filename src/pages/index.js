
import { useEffect, useState } from "react"

export default function Home({ data }) {
  const [inventory, setInventory] = useState([])
  useEffect(() => {
    setInventory(data)
  }, [data])

  
  return (
    <main>

    </main>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/inventory`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}