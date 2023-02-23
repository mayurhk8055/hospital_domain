import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div>
            <h1>  Why choose ICICI Lombard?</h1>
            <div className="container">

                <div className="row">

                    <div className="col-6"> <h1>Dependable</h1> <br /> <h4>You can rely on us at all times.</h4>
                        <br /> <p>Be it during large calamities like Odisha cyclone or minor accidents like a broken tail-light, we have always stood by our customers in time of need. We have repeatedly introduced industry-leading practices for nearly two decades . So, in times of trouble, be assured,
                            we’ve got your back. We stand by our motto: “Nibhaye Vaade”.</p>
                        <ul >
                            <li  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>call center</li>
                            <li>abc</li>
                            <li>286 branches</li>
                        </ul>
                    </div>
                    <div className="col-6"> <img src="" alt="" srcset="" /> <br />Subsequent columns continue along the new line.</div>
                </div>
            </div>
        </div>
    )
}

export default Home
