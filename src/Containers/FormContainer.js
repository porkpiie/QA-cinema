import React, { Component } from 'react';

class FormContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            booking: {
                name: "",
                film: "",
                date: "",
                time: [],
                adult: [],
                child: [],
                concession: [],

            },

            filmOptions: ["PUT STUFF HERE"],
            timeOptions: ["12:15", "15:00", "17:45", "19:30", "21:00"]
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleFullName(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              name: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }
    
      handleAge(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              age: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }
    
      handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              [name]: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }
    
      handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              about: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }
    
      handleCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
    
        if (this.state.booking.skills.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.booking.skills.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.booking.skills, newSelection];
        }
    
        this.setState(prevState => ({
          booking: { ...prevState.booking, skills: newSelectionArray }
        }));
      }
    
      handleFormSubmit(e) {
        e.preventDefault();
        let userData = this.state.booking;
    
        fetch("http://localhost:************************************************************************", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            console.log("Successful" + data);
          });
        });
      }
    
      handleClearForm(e) {
        e.preventDefault();
        this.setState({
          booking: {
            name: "",
            film: "",
            date: "",
            time: [],
            adult: [],
            child: [],
            concession: [],
          }
        });
      }
    
      render() {
        return (
          <form className="container-fluid" onSubmit={this.handleFormSubmit}>
            <Input
              inputType={"text"}
              title={"Full Name"}
              name={"name"}
              value={this.state.booking.name}
              placeholder={"Enter your name"}
              handleChange={this.handleInput}
            />{" "}
            <Input
              inputType={"number"}
              name={"age"}
              title={"Age"}
              value={this.state.booking.age}
              placeholder={"Enter your age"}
              handleChange={this.handleAge}
            />{" "}
            <Select
              title={"Gender"}
              name={"gender"}
              options={this.state.genderOptions}
              value={this.state.booking.gender}
              placeholder={"Select Gender"}
              handleChange={this.handleInput}
            />{" "}
            <CheckBox
              title={"Skills"}
              name={"skills"}
              options={this.state.skillOptions}
              selectedOptions={this.state.booking.skills}
              handleChange={this.handleCheckBox}
            />{" "}
            <TextArea
              title={"About you."}
              rows={10}
              value={this.state.booking.about}
              name={"currentPetInfo"}
              handleChange={this.handleTextArea}
              placeholder={"Describe your past experience and skills"}
            />
            <Button
              action={this.handleFormSubmit}
              type={"primary"}
              title={"Submit"}
              style={buttonStyle}
            />{" "}
            <Button
              action={this.handleClearForm}
              type={"secondary"}
              title={"Clear"}
              style={buttonStyle}
            />{" "}
          </form>
        );
      }
    }
    
    const buttonStyle = {
      margin: "10px 10px 10px 10px"
    };
    
    export default FormContainer;
    
}