import { useEffect, useState } from "react"
import { getBlogsData, getSummaryData } from "./services/data-services"
import Blogs from "./sections/blogs/Blogs"
import ChartSection from "./sections/charts/ChartSection"
import Loader from "./components/common/loader/Loader"

function App() {
  const [blogs, setBlogs] = useState([])
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchData = async () => {
    try {
      const [blogsRes, summaryRes] = await Promise.all([
        getBlogsData(),
        getSummaryData()
      ])
      setBlogs(blogsRes.blogs)
      setSummary(summaryRes.summary)
    } catch (error) {
      console.error("Data fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

if (loading) return <div className="loading"><Loader /></div>

return (
    <div className="container-site">
      <ChartSection summary={summary} />
     <Blogs blogs={blogs} />
    </div>
  )
}

export default App
