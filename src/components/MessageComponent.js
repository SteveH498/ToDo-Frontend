import React from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';


class MessageComponent extends React.Component {
  render() { 
	return <Article align="center" alignContent="center">
			<Section>
				Test test test
			</Section>
		  </Article>;
  }
}


export default MessageComponent;