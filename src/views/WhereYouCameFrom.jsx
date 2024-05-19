import { Link } from "react-router-dom"

export default function WhereYouCameFrom() {
  return (
    <div className="mt-3 mx-4 text-black">
      <h1>How did you hear about TSAlingo?</h1>
      <ul className="menu bg-base-200 w-full rounded-box mx-4 mt-3">
        <li><Link to="/">Friends/family</Link></li>
        <li><Link to="/">Airlines website</Link></li>
        <li><Link to="/">Social media</Link></li>
        <li><Link to="/">News/article/blog</Link></li>
        <li><Link to="/">Other</Link></li>
      </ul>
    </div>
  )
}
