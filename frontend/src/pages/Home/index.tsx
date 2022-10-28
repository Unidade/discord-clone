import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to='/login'>login</Link>
      <br />
      <Link to='/register'>register</Link>
      <br />
      <Link to='/dashboard'>dashboard</Link>
    </div>
  )
}
