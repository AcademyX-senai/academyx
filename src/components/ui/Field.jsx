import './Field.css'

function Field({ label, error, children }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {children}
      {error && (
        <span className="field__erro" role="alert">
          {error}
        </span>
      )}
    </label>
  )
}

export default Field
