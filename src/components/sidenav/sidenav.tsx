import React from 'react'

type SidenavProps = {

}

const Sidenav: React.FC<SidenavProps> = () => {
  return (
    <div className="sidenav">
        <a href="#section">Main</a>
        <a href="#section">Projects</a>
        <a href="#section">Cv</a>
        <a href="#section">Contact</a>
    </div>
  )
}

export default Sidenav;
