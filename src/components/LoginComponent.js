import React from 'react';

import LoginForm from 'grommet/components/LoginForm';

import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';


class LoginComponent extends React.Component {
  render() { 
	return <Article align="center" alignContent="center">
			<Section>
				<LoginForm 
					title="Message App" 
					secondaryText="Sample secondary text" 
					usernameType="text" 
					align="center" 
					forgotPassword={<Anchor href="#" label="Forgot password?" />}/>
			</Section>
		  </Article>;
  }
}


export default LoginComponent;