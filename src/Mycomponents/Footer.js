import React from 'react'

export const Footer = () => {

  let footerStyle = {
    position:"relative",
    top: "09==vh",
    width: "100%",
    border: "3px solid red",
  }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
     <p className="text-centre">
       Copyright &copy; MyTodoslist.com 
       
       created by 👁️ RAHUL RANJAN ❣️
     </p>
    </footer>

  )
}

export default Footer
