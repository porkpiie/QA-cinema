import React, { Component } from 'react';
import Button from '../Components/Button.component';
import CheckBox from '../Components/CheckBox.component';
import Input from '../Components/Input.component';
import Select from '../Components/Select.component';




class FormContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            booking: {
                name: "",
                film: "",
                date: "",
                showing: [],
                adult: "",
                child: "",
                concession: "",

            },

            filmOptions: ["PUT STUFF HERE"],
            showingOptions: ["12:15", "15:00", "17:45", "19:30", "21:00"]
        };
        this.handleAdult = this.handleAdult.bind(this);
        this.handleChild = this.handleChild.bind(this);
        this.handleConcession = this.handleConcession.bind(this);
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
    
      handleAdult(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              adult: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }

      handleChild(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              child: value
            }
          }),
          () => console.log(this.state.booking)
        );
      }

      handleConcession(e) {
        let value = e.target.value;
        this.setState(
          prevState => ({
            booking: {
              ...prevState.booking,
              concession: value
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
    
      handleCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
    
        if (this.state.booking.showing.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.booking.showing.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.booking.showing, newSelection];
        }
    
        this.setState(prevState => ({
          booking: { ...prevState.booking, showing: newSelectionArray }
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
            showing: [],
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
           
            <Select
              title={"Film"}
              name={"film"}
              options={this.state.filmOptions}
              value={this.state.booking.film}
              placeholder={"Select Film"}
              handleChange={this.handleInput}
            />{" "}
            <CheckBox
              title={"Showing"}
              name={"showing"}
              options={this.state.showingOptions}
              selectedOptions={this.state.booking.showing}
              handleChange={this.handleCheckBox}
            />{" "}
             <Input
              inputType={"number"}
              name={"adult"}
              title={"Adult"}
              value={this.state.booking.adult}
              placeholder={"Number of Adult tickets"}
              handleChange={this.handleAdult}
            />{" "}
             <Input
              inputType={"number"}
              name={"child"}
              title={"Child"}
              value={this.state.booking.child}
              placeholder={"Number of Child tickets"}
              handleChange={this.handleChild}
            />{" "}
             <Input
              inputType={"number"}
              name={"concession"}
              title={"Concession"}
              value={this.state.booking.concession}
              placeholder={"Number of Concession tickets"}
              handleChange={this.handleConcession}
            />{" "}
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
    
