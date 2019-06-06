import React, { Component } from 'react';
import { Divider, Header, Button, Popup, Grid, Menu, Icon, Dropdown, Image, Container, Input } from 'semantic-ui-react'
import LoginForm from './LoginForm'


const MegaMenu = () => (
	<Dropdown.Menu id='sm-products' fluid style={{ }}>
		<Grid columns={2} >
		  <Grid.Column  style={{ width: '40rem', height: 'auto'}} >
			<div style={{ padding: '1rem'}}>
				<a href='/ver-mas-productos' style={{color: '#372c30'}}>VER MÁS PRODUCTOS</a>
				<Divider />
			</div>
		  </Grid.Column >
		  <Grid.Column  style={{ 
			  width: '20rem', 
			  height: 'auto'
			  }} >
				<div style={{ backgroundColor: '#eabac8' }}>
				<section style={{ padding: '1rem' }}>
					<a href='/todas-las-tiendas' style={{color: '#372c30', textAlign: 'left'}}>TODAS LAS TIENDAS</a>
					<Divider />
					<p  style={{whiteSpace: 'normal', padding: '0 2rem', fontSize: '13px', textAlign: 'center', color: 'darkslategray'}}>
						Echa un vistazo a los productos de las
						tiendas oficiales. Te encantará.
					</p>
					<div style={{textAlign: 'center' }}>
						<Button size='Large' as='a' href='/easy-express' style={{color: '#71161f', backgroundColor: 'white', margin: 'auto'}} >EASY EXPRESS</Button>
					</div>
				</section>
				<Image src='/images/makeup.png' fluid/>
				</div>
		  </Grid.Column> 
		</Grid>
	</Dropdown.Menu>
);


let src = "/images/logo-easymall-256.png";

const SecondPopup = () => (
	<Popup
	  flowing
	  hoverable
	  trigger={<Menu.Item>Productos</Menu.Item>}
	  position='right center'
	>
		<Grid centered divided columns={3}>
		  <Grid.Column textAlign='center'>
			<Header as='h4'>Basic Plan</Header>
			<p>
			  <b>2</b> projects, $10 a month
			</p>
			<Button>Choose</Button>
		  </Grid.Column>
		  <Grid.Column textAlign='center'>
			<Header as='h4'>Business Plan</Header>
			<p>
			  <b>5</b> projects, $20 a month
			</p>
			<Button>Choose</Button>
		  </Grid.Column>
		  <Grid.Column textAlign='center'>
			<Header as='h4'>Premium Plan</Header>
			<p>
			  <b>8</b> projects, $25 a month
			</p>
			<Button>Choose</Button>
		  </Grid.Column>
		</Grid>
	</Popup>
);



export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
	<Container>
	   <Menu secondary inverted className='sm-menu' style={{ marginBottom: 0 }} stackable>
		<Menu.Item>
			<Image src={src} as='a' href='/' size='small' verticalAlign='middle' />
		</Menu.Item>
		<Menu.Item>
			<Input action={{ icon: 'search' }} placeholder='Search...' style={{ widtho: '31vw' }} className='sm-search' fluid/>
		</Menu.Item>
		<Menu.Menu position='right'>
			<Dropdown simple text='Categorías' className='link item'>
			  <Dropdown.Menu style={{ marginTop: '-8px' }}>
				<Dropdown.Header>Categorías</Dropdown.Header>
				<Dropdown.Item>Ferreterías</Dropdown.Item>
				<Dropdown.Item>Bedroom</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item>Status</Dropdown.Item>
				<Dropdown.Item>Cancellations</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
			<Menu.Item
			  name='Empresas'
			  active={activeItem === 'Empresas'}
			  onClick={this.handleItemClick}
			/>
			<Menu.Item
			  name='Servicios'
			  active={activeItem === 'Servicios'}
			  onClick={this.handleItemClick}
			/>
			<Dropdown simple text='Ingreso/Registro' className='link item'>
			  <LoginForm />
			</Dropdown>
		</Menu.Menu>
	  </Menu>
		<Dropdown item simple text='Tiendas Comerciales'
			style={{ 
				color: 'rgba(255,255,255,.7)',
				fontSize: '100%',
				width: '151px',
				fontWeight: '700',
				textAlign: 'right'
				}}>
		  <Dropdown.Menu style={{ padding: '18px 0', width: '220px' }}>
			<Dropdown.Item style={{ textAlign: 'right', position: 'initial' }} >
			  <span >PRODUCTOS </span>
			  <i className='angle right icon' style={{ marginRight: '35px' }}/>
			  <MegaMenu />
			</Dropdown.Item>
			<Dropdown.Item style={{ textAlign: 'right' , position: 'initial' }} >
				<span >SERVICIOS </span>
				<i className='angle right icon' style={{ marginRight: '35px' }} />
				<Dropdown.Menu id='sm-products' >
				<Grid centered divided columns={3} style={{ padding: '10px' }}>
				  <Grid.Column textAlign='center'>
					<Header as='h4'>Basic Plan</Header>
					<p>
					  <b>2</b> projects, $10 a month
					</p>
					<Button>Choose</Button>
				  </Grid.Column>
				  <Grid.Column textAlign='center'>
					<Header as='h4'>Business Plan</Header>
					<p>
					  <b>5</b> projects, $20 a month
					</p>
					<Button>Choose</Button>
				  </Grid.Column>
				  <Grid.Column textAlign='center'>
					<Header as='h4'>Premium Plan</Header>
					<p>
					  <b>8</b> projects, $25 a month
					</p>
					<Button>Choose</Button>
				  </Grid.Column>
				</Grid>
			  </Dropdown.Menu>
			</Dropdown.Item>
		  </Dropdown.Menu>
		</Dropdown>
	</Container>
      
    )
  }
}



