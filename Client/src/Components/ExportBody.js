import "./ExportBody.css"

const ExportBody = ({ content }) => {
  return (
    <div>
      <li className="ExportContent">{content.text}</li>
    </div>
  )
}

export default ExportBody
