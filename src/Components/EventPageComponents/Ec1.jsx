import React from 'react'
import Navbar from '../HomePageComponents/Navbar'
import './Ec1.css'

const Ec1 = () => {
  return (
    <>
    <Navbar/>
    <div id='events'>
        Hello
    </div>
    {/* Footer */}
<footer className="footer">

  <div className="footer-content">

    <p>
      © {new Date().getFullYear()} Pothigai Atma Gnana Kudil.
      All Rights Reserved.
    </p>

    <a href="mailto:info@pothigaiatma.org">
      ✉ info@pothigaiatma.org
    </a>

  </div>

</footer>
    </>
  )
}

export default Ec1