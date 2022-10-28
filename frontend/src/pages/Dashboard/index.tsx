import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div>
      DASHBOARD Batata
      <button type='button' onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  )
}
