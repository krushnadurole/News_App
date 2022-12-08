// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export class Navbar extends Component {


//   render() {
//     return (
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="btn-group dropend">
//           <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropend
//           </button>
//           <ul class="dropdown-menu">
//             <ul class="navbar-nav mr-auto">
//               <li class="nav-item active"><Link class="nav-link" to='/general'>Home             </Link></li>
//               <li class="nav-item">       <Link class="nav-link" to='/business'>Business         </Link></li>
//               <li class="nav-item active"><Link class="nav-link" to='/sports'> Sports          </Link></li>
//               <li class="nav-item">       <Link class="nav-link" to='/science'> Science        </Link></li>
//               <li class="nav-item">       <Link class="nav-link" to='/entertainment'>Entertainment    </Link></li>
//               <li class="nav-item active"><Link class="nav-link" to='/technology'>Technology      </Link></li>
//               <li class="nav-item">       <Link class="nav-link" to='/health'> Health      </Link></li>
//             </ul>
//           </ul>
//         </div>



//       </nav>
//     )
//   }
// }

// export default Navbar


























import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to='/general' style={{color:"chocolate"}}>Home             </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/business'>Business         </Link>                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/sports'> Sports          </Link>                </li>
                <li class="nav-item">
                  <Link class="nav-link" to='/science'> Science        </Link>
                </li>
                <li className='nav-item'>
                  <Link class="nav-link" to='/entertainment'>Entertainment    </Link>
                </li>
                <li className='nav-item'>
                  <Link class="nav-link" to='/technology'>Technology      </Link>
                </li>
                <li className='nav-item-active'>
                  <Link class="nav-link" to='/health'> Health      </Link>
                </li>
                <form class="d-flex-end" >
                  <li className='nav-item '>
                    <Link class="nav-link" to="/about"style={{color:"Brown"}}>About Us</Link>
                  </li>

                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar


