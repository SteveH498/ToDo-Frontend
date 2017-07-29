import React from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

class NoMatchComponent extends React.Component {
  render() { 
	return <Article align="center" alignContent="center">
			<Section>
				<h1>Unkown route</h1>
			</Section>
		  </Article>;
  }
}


export default NoMatchComponent;