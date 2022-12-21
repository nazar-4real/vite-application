import { useNavigate } from "react-router-dom"

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        fontFamily: 'monospace, sans-serif',
        display: 'block',
        marginBottom: '10px'
      }}
    >
      Go back
    </button>
  )
}

export default GoBackBtn