import React, { Component } from 'react';
import { Header, Grid, Icon,  Image, Container, Transition, Responsive  } from 'semantic-ui-react'


class Commercial extends Component {
	
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}
	
	state = { visible: false }
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	
	
	
	handleScroll(event) {
		var heightBound = 1090;
		if (heightBound < window.scrollY) {
			this.setState({ visible: true })
		} 
	}
  
	
	
  render() {
	  const { visible } = this.state
	  
    return (
	<Container fluid>
		<Grid verticalAlign='middle' >
			<Grid.Row columns={2} >
				<Grid.Column  id='commercial-section-image' mobile={16} tablet={16} computer={8} >
					<Responsive minWidth={Responsive.onlyComputer.minWidth}>
						<Transition visible={visible} animation='fade right' duration={1000}>
							<Image  as='a' href='/registro' src='/images/commercial.svg' fluid />
						</Transition>
					</Responsive>
					<Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
						<Image  as='a' href='/registro' src='/images/commercial.svg' fluid />
					</Responsive>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={12} computer={5} style={{ margin:'auto', paddingTop: '0.8rem'}}>
					<Header as='h4' style={{ textAlign: 'center', fontWeight: 100, margin: '0'}}>Empresas</Header>
					<Header as='h1' id='commercial-section-title' style={{ textAlign: 'center', marginTop: '0'  }}>Potencial Comercial</Header>
					<p className="commercial-section-message">Las bases más importantes del diseño web son nuestro más fiel enfoque a la hora de 
					construir una tienda online para una empresa. Te presentamos nuestras estrategias de desarrollo
					que harán que tu empresa alcance las metas que siempre te has propuesto.</p>
					<Grid textAlign='center'>
						<Grid.Row  columns={4}>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='paint brush'/>
								<div >Diseños</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='hand point up outline'/>
								<div >SEO</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='sync'/>
								<div >Interacción</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='bullhorn'/>
								<div >Publicidad</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
    );
  }
}

export default Commercial;
