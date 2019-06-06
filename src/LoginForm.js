import React, { Component } from 'react';
import { Divider, Header, Button, Grid, Icon, Dropdown, Image, Input } from 'semantic-ui-react'


class LoginForm extends Component {


  render() {

    return (
	<Dropdown.Menu style={{ backgroundColor: '#eee', marginTop: '-10px' }}>
		<Grid columns={2} style={{ display: 'inline' }} divided>
		  <Grid.Column  style={{ 
			  width: '23rem', 
			  height: 'auto',
			  }} >
			<div style={{ padding: '0 1rem'}}>
				<Header as='h4'><Icon name='user' />INGRESAR USUARIO</Header>
				<Divider />
				<div style={{  textAlign: 'center'}}>
					<div style={{ color: '#111', padding: '0.5rem' }}>Nombre de Usuario</div>
					<Input placeholder='Nombre' />
					<div style={{ color: '#111', padding: '0.5rem' }}>Contraseña</div>
					<Input placeholder='Contraseña' />
					<Divider hidden />
					<p style={{textAlign: 'center' }}>
						<Button as='a' href='/registro-empresas' style={{color: '#fff', backgroundColor: '#e68c4e', margin: 'auto'}} >Ingresar</Button>
					</p>
					<div style={{ color: 'brown', textTransform: 'uppercase' }} >
						<a href='/registro' style={{ color: 'brown'}}><small>Registrar Usuario</small></a> | <a href='/recuperar-contrasena' style={{ color: 'brown'}}><small>Olvidé mi Contraseña</small></a>
					</div>
				</div>
			</div>
		  </Grid.Column>
		  <Grid.Column  style={{ 
			  width: '20rem', 
			  height: 'auto',
			  paddingLeft: '0'
			  }} >
				<div style={{  }}>
				<section style={{ padding: '0 1rem' }}>
					<Header as='h4'><Icon name='home' />REGISTRAR EMPRESA</Header>
					<Divider />
					<p style={{ whiteSpace: 'normal',color:'grey' }}><small>Solicita tu tienda online para ventas o servicios</small></p>
					<div style={{textAlign: 'center' }}>
						<Button as='a' href='/registro-empresas' style={{color: '#fff', backgroundColor: '#e68c4e', margin: 'auto'}} >Comienza Ahora</Button>
					</div>
				</section>
				</div>
				<Image src='/images/computers.png' style={{  marginTop: '-16px', zIndex: '-1' }}/>
				<a href='/caracteristicas' style={{ position: 'relative', top: '-30px', left: '14px', color: 'brown' }} ><small>SISTEMAS DISPONIBLES</small></a>
		  </Grid.Column> 
		</Grid>
	</Dropdown.Menu>
    );
  }
}

export default LoginForm;
