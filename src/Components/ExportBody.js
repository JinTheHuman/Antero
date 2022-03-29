import "./ExportBody.css"

const ExportBody = ({ content }) => {
  return (
    <div className="ExportContent">
      <li>{content.text}</li>
    </div>
  )
}

export default ExportBody
