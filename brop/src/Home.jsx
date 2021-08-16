import React from 'react'
import './Home.css';
import pic from './pic.png';
import p1 from './brop2.png'

function Home() {
    return (
        <>
        <h1>----------------</h1>
        <img src = {p1}  className = "fluid" width = "200" />
        <section id ="header" className="d-flex align-items-center">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">

                        <div className="col-md-6 pt-5 pt-lg=0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>Come and Fly With <strong className="brand-name">Brop</strong></h1>
                            <h2 className="my-3">
                                 We are the Team of Talented Developers to enhance the community Experience</h2>
                            <div className="mt-3">
                                <a href=" "  className="btn btn-dark"> Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                             
                            <img src = {pic}  className = "animated" width = "1100" />
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <br />
        <footer>
            <p>Made with ♥ by Imran Khan 😎<br/>
            <a href="mailto:imran.techwiz@gmail.com">Imran.techwiz@gmail.com</a></p>
        </footer>
        </>
    )
}

export default Home;
