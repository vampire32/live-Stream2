
import Image from 'next/image'
import React from 'react'
import Logo from "../assets/logo.png"

const Navbar = () => {
    
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <Image src={Logo} alt="Logo" width="60" height="54"
                class="d-inline-block align-text-top"/>
       
        </a>
        <p class="mt-3" style={{fontWeight: "bold"}}>Pakistan Cricket Stream</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          
            
        </div>
    </div>
</nav>
  )
}

export default Navbar