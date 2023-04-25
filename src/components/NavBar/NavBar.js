//const bootstrap = require('bootstrap')
import './NavBar.css'
export default function Header(){

    return(
        <div className='bgColor'>
        <div className="container-fluid">
            <div className="row d-flex justify-content-around">
                <div className="col-sm-3">
                    <h1>logo</h1>
                </div>
                <div className="col-sm-6">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                </div>
                <div className="col-sm-3">  
                    <h3> hola</h3>
                </div>
            <h1 className="">logo</h1>
            <p>navbar</p> 
            </div>   
        </div>
        </div>
    )
}