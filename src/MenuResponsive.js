import React, { Component } from 'react';
import { Segment,  Sidebar, Button,Menu, Icon, Responsive } from 'semantic-ui-react'



class SidebarMenu extends Component {

  state = { visible: false }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })


  render() {
    const { visible } = this.state
    
    let sidebarStyles = {
		position: 'fixed',
		height: '100%',
		zIndex: '300',
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.4)',
		visibility: visible ? 'visible' : 'hidden',
		border: '2px',
		marginTop: '0'
	}
    
    return (
      <div>
		<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
			<Button icon='bars' circular
				style={{ backgroundColor: '#313131', color:'#eaeaea', border: '1px solid #555', position: 'fixed',zIndex: '91',width: '39px',top: '18px',right: '22px' }} 
				onClick={this.handleButtonClick}
				/>
		</Responsive>
        <Sidebar.Pushable as={Segment} style={sidebarStyles}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            direction='right'
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Inicio
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='th' />
              Categorías
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='briefcase' />
              Empresas
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='handshake' />
              Servicios
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='sign in' />
              Ingreso/Registro
            </Menu.Item>
          </Sidebar>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarMenu

