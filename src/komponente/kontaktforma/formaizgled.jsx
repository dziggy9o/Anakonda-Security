import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {TextField, Button, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }




class FormIzgled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: false
    };
  }
 
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });
          this.setState({
              firstName: '',
              lastName: '',
              msg: '',
              email: ''
          })
        } else {
          this.setState({ error: true });
        }
      })
      .catch(error => this.setState({ error: error.message }));
  };
  handleChange = (e, field) => {
    const value = e.target.value;
    const updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };
  handleClose = (e, razlog) => {
      if (razlog === 'clickaway') {
          return;
      }
      this.setState({mailSent: false, error: false,})
  }

  render() {
    const { successMessage, errorMessage, fieldsConfig } = this.props.config;
    
    return (
        <React.Fragment>
          <form  autoComplete="off" action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                          <TextField 
                            fullWidth
                            style={{ marginTop: 8, marginBottom: 8 }}
                            id='outlined-basic'
                            variant="outlined"
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={this.state[field.fieldName]}
                            onChange={e => this.setState({[field.fieldName]: e.target.value})}
                          />   
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <TextField 
                            fullWidth
                            multiline
                            variant="outlined"
                            label={field.label}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={this.state[field.fieldName]}
                            onChange={e => this.setState({[field.fieldName]: e.target.value})}
                        />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
                <Button
                    variant="contained"
                    color="primary" component="span"
                    style={{margin: '20px'}}
                    onClick={e => this.handleFormSubmit(e)}
                >
                    Pošalji
                </Button>
            <div>
              {this.state.mailSent && 
              <Snackbar open={this.state.mailSent} autoHideDuration={6000} onClose={this.handleClose} >
                <Alert onClose={this.handleClose}  severity="success">
                 {successMessage}
                </Alert>
                </Snackbar>
              }
              {this.state.error && 
              
              <Snackbar open={this.state.error} autoHideDuration={6000} onClose={this.handleClose} >
                <Alert onClose={this.handleClose} severity="error">
                {errorMessage}
                </Alert>
                </Snackbar>
             }
            </div>
          </form>
          </React.Fragment>
    );
  }
}

export default FormIzgled;
//propTypes for the component
FormIzgled.propTypes = {
  config: PropTypes.object.isRequired
};
