const Success = ({openMainPage}) => {
  return (
    <div className="success_field">
          <div className="success_field_header">Start for free</div>
          <div className="success_field_result">Success!</div>
          <button onClick={openMainPage} className="button_new_form">New Form</button>
        </div>
  )
}
export default Success;
