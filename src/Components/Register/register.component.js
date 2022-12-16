import React, {Component} from "react";
import {Form,Input,Label,FormGroup, FormFeedback } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import {isEmail} from 'validator';


class Register extends Component {

    constructor (props){
        super(props);

        this.state = this.getInitalState();
    }

    getInitalState= () =>({
        data: {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        errors:{}

    });
    handleChange =(e) =>{
        this.setState({
            data:{
                ...this.state.data,
                [e.target.name]: e.target.value

            },
            errors:{
                ...this.state.errors,
                [e.target.name]: ''
            }

        });

    }
     validate = () => {
        const { data } = this.state;
        let errors ={};

        if(data.firstName ==='')errors.firstName= 'First Name cannot be blank.';
        if (data.lastName ==='')errors.lastName= 'Last Name cannot be blank.';
        if (!isEmail(data.email)) errors.email= 'Email must be valid';
        if (data.email==='') errors.email='Email cannot be blank.';
        if (data.password ==='') errors.password= 'password must be valid';
        if (data.confirmPassword !== data.password) errors.confirmPassword ='password must matched';

        return errors;
     }



    handleSubmit =(event) => {
        event.preventDefault();

        const {data} = this.state;
        const errors = this.validate();

        console.log(data,errors);

        if (Object.keys (errors).length===0){
            console.log(data);
            //call an api here
            //resetting the forms
            this.setState(this.getInitalState());

        }else{
            this.setState({errors});

        }
    }
    render(){
        const {data,errors} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                    <Label for =" firstName"> First Name</Label>
                    <Input id="firstName" value={data.firstName} invalid= {errors.firstName ? true :false} name="firstName" onChange={this.handleChange}/>
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for =" lastName"> Last Name</Label>
                    <Input id="lastName" value={data.lastName} invalid= {errors.lastName ? true :false} name="lastName" onChange={this.handleChange}/>
                    <FormFeedback>{errors.lastName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for ="email"> Email</Label>
                    <Input id="email" value={data.email} invalid= {errors.email ? true :false} name="email"onChange={this.handleChange}/>
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for =" password"> Password</Label>
                    <Input id="password" type="password" value={data.password} invalid= {errors.password ? true :false} name="password" onChange={this.handleChange}/>
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for ="confrimPassword"> Confrim Password</Label>
                    <Input id="confrimPassword" type="password" value={data.confirmPassword} invalid= {errors.confirmPassword ? true :false} name="confirmPassword" onChange={this.handleChange}/>
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                    
                </FormGroup>
                
                <Button  type='submit'color="primary">submit</Button>{' '}
   
            </Form>
        );

    }
}
export default Register;