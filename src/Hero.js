import React, { Component } from 'react';
import { Header, Button, Grid, Container } from 'semantic-ui-react'
import { Link } from "react-router-dom"


let styles = {
	padding: '1.2em',
	borderRadius: '1.5em',
	fontWeight: '100',
	textTransform: 'uppercase',
	fontSize: '1.6em'
};

let stylesTransparent = JSON.parse(JSON.stringify(styles));
stylesTransparent.backgroundColor = 'transparent';
stylesTransparent.border = '2px solid #e3dfde';
stylesTransparent.color = '#e3dfde';

class Hero extends Component {
  render() {
    return (
		<div>
			<div className="landing-hero" style={{backgroundImage: 'url("/images/hero-image-large2.jpeg")', backgroundPosition: 'top center', backgroundSize: 'cover'}}>
			<Container style={{ padding: '20% 0 20% 5%'}}>
				<Header as='h2' className='hero-subtitle' >La concentración más grande de tiendas oficiales</Header>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column tablet={16} computer={10}>
							<Header as='h1' className='hero-title'>Un destino multiplataforma para el comercio</Header>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row className='hero-buttons-row' columns={2} padded='vertically'>
						<Grid.Column mobile={8} tablet={5} computer={5}>
							<Button className='hero-button hero-transparent' size='massive' as={Link} to='/topics' fluid >Usuarios</Button>
						</Grid.Column>
						<Grid.Column mobile={8} tablet={5} computer={5}>
							<Button className='hero-button'size='massive' as={Link} to='/about' fluid>Empresas</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			</div>
			<div id="business-hero" style={{backgroundPosition: 'top center', backgroundSize: 'cover', backgroundColor: 'transparent',marginTop: '-17%'}}>
			<Container  >
				<Grid className='business-hero-div' verticalAlign='middle' style={{ }}>
					<Grid.Row>
						<Grid.Column className='business-hero-grid' mobile={16} tablet={12} computer={8} floated='right' style={{  }}>
							<Header as='h4' style={{ textAlign: 'center', fontWeight: 100, marginTop: '4rem'}}>Sistema integrado para todo tipo de empresa</Header>
							<Header as='h1' style={{ textAlign: 'center', fontSize: '3rem', marginTop: '0' }}>Invierte en tu futuro</Header>
							<p>Convertimos tu empresa en un potencial virtual con todos los 
							valores de tu tienda física para que puedas sacar el máximo provecho
							de ella y la alojamos en la plataforma de EasyMall. De esta manera,
							no necesitarás gastar en servidores, seguridad, diseñadores,
							programadores, dominios ni sistemas ya que al afiliarte con nosotros
							disfrutarás de todos estos servicios.</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			</div>
		</div>
    );
  }
}

export default Hero;
