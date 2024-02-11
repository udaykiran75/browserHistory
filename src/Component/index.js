import './index.css'

const AddlistItems = props => {
  const {listDetails, ondelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = listDetails

  const deleteItem = () => {
    ondelete(id)
  }

  return (
    <li className="eachlist">
      <div className="medium-width-div">
        <p className="time">{timeAccessed}</p>
        <div className="list-details-div">
          <div className="logo-website-Div">
            <p className="medium-div-time">{timeAccessed}</p>
            <img src={logoUrl} className="logoImage" alt="domain logo" />
            <div className="medium-div-title">
              <p className="title">{title}</p>
              <p className="domine">{domainUrl}</p>
            </div>
          </div>
          <button data-testid="delete" onClick={deleteItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="deleteIcon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default AddlistItems
