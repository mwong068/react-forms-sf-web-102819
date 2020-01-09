import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: [ ]
  // }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   this.setState(previousState => ({
  //     submittedData: {...previousState.submittedData, submittedData: [].push(formData)}
  //   })
  //   )
  //   this.sendFormDataSomewhere(formData)
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      <div>
      <form>
        <input type="text"
        name="firstName"
        onChange={event => this.props.handleChange(event)} 
        value={this.props.formData.firstName} 
        />
        <input type="text" 
        name="lastName"
        onChange={event => this.props.handleChange(event)} 
        value={this.props.formData.lastName} 
        />
        {/* <button type="submit">Submit</button> */}
        </form>
      {/* {this.listOfSubmissions()} */}
      </div>
    )
  }
}

export default Form;