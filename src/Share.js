import React, { Component } from 'react';
import { Header, Grid, Icon, Image, Container,Transition, Responsive } from 'semantic-ui-react'


class Share extends Component {
	
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
		var heightBound = 1830;
		if (heightBound < window.scrollY) {
			this.setState({ visible: true })
		} 
	}
  
	
	
  render() {
	  const { visible } = this.state
	  
    return (
    <div className='share-inner'>
    <div className='share-image'>
	<Container className='share-container'>
		<Grid verticalAlign='middle'>
			<Grid.Row columns={2} style={{ }}>
				<Grid.Column style={{ color: 'white' }} mobile={16} tablet={16} computer={8}>
					<Header as='h4' style={{ textAlign: 'center', fontWeight: 100, margin: '0', color:'white'}}>Usuarios</Header>
					<Header as='h1' style={{ textAlign: 'center', fontSize: '3rem', marginTop: '0',color:'white' }}>Al Estilo De Un Mall</Header>
					<p>
					Sabemos que comprar en mercados puede llegar a ser una experiencia insegura
					y desordenada. La nueva plataforma de EasyMall te ofrece la mayor concentración
					de tiendas oficiales de ventas y servicios. Disfruta de la exclusividad,
					seguridad y confort de este destino comercial.
					</p>
					<Grid textAlign='center'>
						<Grid.Row  columns={4}>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='diamond'/>
								<div>Exclusivo</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='heart'/>
								<div>Intuitivo</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='thumbs up outline'/>
								<div>Fácil</div>
							</Grid.Column>
							<Grid.Column >
								<Icon circular inverted color='orange' size='big' name='shield alternate'/>
								<div>Seguro</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
				
				<Grid.Column mobile={16} tablet={12} computer={8} >
					<Responsive minWidth={Responsive.onlyComputer.minWidth}>
					<Transition visible={visible} animation='fade left' duration={1000}>
						<div style={{ backgroundColor: 'black', padding: '5rem'}}>
							<Header as='h2' content='Tan Fácil Como Rápido' style={{ color: 'orange' }}/>
							<p style={{color: 'white'}}>
							Disfruta de diseños exclusivos para tu imagen corporativa
							llevando el estilo gráfico de tu empresa a otros niveles
							y prepara el camino para el desarrollo del Branding de tu
							empresa y posicionamiento SEO de tu tienda online. Todo esto
							sin ningún cargo extra. ¡Increible! Sólo afíliate y disfruta
							del servicio integral que te ofrece EasyMall
							</p>
							<Image  src='/images/easymall_flow.png' fluid />
						</div>
					</Transition>
					</Responsive>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container></div>
	<Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
		<div style={{ backgroundColor: 'black',padding: '5% 5% 10rem 5%'}}>
			<Header as='h2' content='Tan Fácil Como Rápido' style={{ color: 'orange' }}/>
			<p style={{color: 'white'}}>
			Disfruta de diseños exclusivos para tu imagen corporativa
			llevando el estilo gráfico de tu empresa a otros niveles
			y prepara el camino para el desarrollo del Branding de tu
			empresa y posicionamiento SEO de tu tienda online. Todo esto
			sin ningún cargo extra. ¡Increible! Sólo afíliate y disfruta
			del servicio integral que te ofrece EasyMall
			</p>
			<Image  src='/images/easymall_flow.png' fluid />
		</div>
	</Responsive>
	</div>
    );
  }
}

export default Share;
