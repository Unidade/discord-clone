import { Link } from 'react-router-dom'

interface LabelWithRedirectProps {
  label: string
  redirect: string
  redirectText: string
}

export default function LabelWithRedirect({
  label,
  redirect,
  redirectText,
}: LabelWithRedirectProps) {
  return (
    <div className='small-text light-gray-text mt-1'>
      {label}{' '}
      <Link to={`${redirect}`} className='blue-text no-underline'>
        {redirectText}
      </Link>
    </div>
  )
}
