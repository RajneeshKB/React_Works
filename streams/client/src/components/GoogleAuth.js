import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{
    // state = {isSignedIn: null};  //without using redux
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                'clientId': '45305640467-m5cd02okn3tglu0gmp3tjpqvif47cuej.apps.googleusercontent.com',
                'scope' : 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() }); //without redux
                this.onAuthChange(this.auth.isSignedIn.get()); //with redux
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn)=>{
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() }); /* without using redux */
        /* with redux */
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    };

    onSignInClick = ()=>{
        this.auth.signIn();
    }

    onSignOutClick = ()=>{
        this.auth.signOut();
    }

    renderAuthButton(){
        // if(this.state.isSignedIn === null){ //without redux
        if(this.props.isSignedIn === null){  // with redux
            return null;
        // } else if(this.state.isSignedIn){    //without redux
        } else if (this.props.isSignedIn) {     //with redux
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        }else{
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with google
                </button>
            )
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{ signIn, signOut })(GoogleAuth);