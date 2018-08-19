import React, { Component } from 'react';
import { Divider, Header, Button, Grid, Menu, Dropdown, Image, Container, Input, Responsive } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import { Link } from "react-router-dom"

let src = "/images/logo-easymall-256.png";


export default class MenuExampleSecondary extends Component {

	state = { 
		activeItem: 'home'
	}

  render() {
    const { activeItem } = this.state

    return (
		<Container>
		<table style={{ width:'100%' }}>
		<tbody>
		<tr>
			<td>
				<Image src={src} as={Link} to='/' size='small' verticalAlign='middle' />
			</td>
			<td style={{ width:'100%', paddingLeft: '15px' }}>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<Input action={{ icon: 'search' }} placeholder='Search...' className='sm-search' fluid/>
				</Responsive>
			</td>
			<td>
			<Menu secondary inverted className='sm-menu' style={{ marginBottom: 0 }}>
				
				<Menu.Menu position='right'>
					<Responsive  as={Dropdown} simple text='Categorías' className='link item' minWidth={Responsive.onlyComputer.minWidth}>
						<CategoriesDropdown />
					</Responsive>
					<Responsive  as={Dropdown} simple icon='th' className='link item' {...Responsive.onlyTablet}>
						<CategoriesDropdown />
					</Responsive>
					<Responsive as={Menu.Item}
					  name='Empresas'
					  active={activeItem === 'Empresas'}
					  onClick={this.handleItemClick}
					  minWidth={Responsive.onlyComputer.minWidth}
					/>
					<Responsive as={Menu.Item}
					  icon='briefcase'
					  active={activeItem === 'Empresas'}
					  onClick={this.handleItemClick}
					  {...Responsive.onlyTablet}
					/>
					<Responsive as={Menu.Item}
					  name='Servicios'
					  active={activeItem === 'Servicios'}
					  onClick={this.handleItemClick}
					  minWidth={Responsive.onlyComputer.minWidth}
					/>
					<Responsive as={Menu.Item}
					  icon='handshake'
					  active={activeItem === 'Servicios'}
					  onClick={this.handleItemClick}
					  {...Responsive.onlyTablet}
					/>
					<Responsive as={Dropdown} simple text='Ingreso/Registro' className='link item' 
						minWidth={Responsive.onlyComputer.minWidth} >
						<LoginForm />
					</Responsive>
					<Responsive
						as={Dropdown}
						icon='sign in'
						simple className='link item'
						{...Responsive.onlyTablet}
					  ><LoginForm /></Responsive>
				</Menu.Menu>
			</Menu>
			</td>
		</tr>
		</tbody>
		</table>
		<Responsive minWidth={Responsive.onlyComputer.minWidth}>
		<Dropdown item simple text='Tiendas Comerciales'
			style={{ 
				color: 'rgba(255,255,255,.7)',
				fontSize: '80%',
				width: '169px',
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
		</Responsive>
</Container>
    )
  }
}

const MegaMenu = () => (
	<Dropdown.Menu id='sm-products'>
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
						<Button as='a' href='/easy-express' style={{color: '#71161f', backgroundColor: 'white', margin: 'auto'}} >EASY EXPRESS</Button>
					</div>
				</section>
				<Image src='/images/makeup.png' fluid/>
				</div>
		  </Grid.Column> 
		</Grid>
	</Dropdown.Menu>
);

const CategoriesDropdown = () => (
<Dropdown.Menu style={{ marginTop: '-8px' }}>
	<Dropdown.Header>Categorías</Dropdown.Header>
	<Dropdown.Item>Ferreterías</Dropdown.Item>
	<Dropdown.Item>Bedroom</Dropdown.Item>
	<Dropdown.Divider />
	<Dropdown.Item>Status</Dropdown.Item>
	<Dropdown.Item>Cancellations</Dropdown.Item>
</Dropdown.Menu>
)

