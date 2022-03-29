import ExportBody from './ExportBody'
import "./ExportRow.css"

const ExportRow = ({ topic, content }) => {
  return (
    <div className="ExportRow">
      <h1>{topic}</h1>
      <ul>
        {content.map((content) => (<ExportBody content={content} />))}
      </ul>
    </div>
  )
}

export default ExportRow
