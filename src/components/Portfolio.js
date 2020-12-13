import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layout.css';

 const images = [
    '../bimg1.jpg',
    '../bimg2.jpg',
    '../bimg3.jpg',
    '../bimg4.jpg',
    '../bimg5.jpg',
    '../bimg6.jpg',
    '../bimg7.jpg',
    '../bimg8.jpg',
    '../bimg9.jpg',
    '../bimg10.jpg',
    '../bimg11.jpg',
    '../bimg12.jpg',
  ];

class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
        
<section>            
    <div className="container">             
        <div className="row"> {/*this div centralize content*/}

            {/* // first row */}
            <div className="rowPorfolio">
                <div className="columnPortfolio">                     
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0})}}>

                            <figure className="imgframe">
                            <img src='../bimg1.jpg' alt="gallery" width="300" height="150" />
                            <figcaption>Mirror reflection</figcaption>
                            </figure>
                        
                    </a>
                </div>

                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg2.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Frivolous thoughts</figcaption>
                        </figure>
                    </a>
                </div>

                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2})}}>
                    
                        <figure className="imgframe">
                        <img src='../bimg3.jpg' alt="gallery" width="300" height="150"/>
                        <figcaption>Pieces</figcaption>
                        </figure>
                    </a>
                </div>
            </div>

            {/* second row  */}
            <div class="rowPorfolio">
            
                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg4.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Time goes by slowly</figcaption>
                        </figure>
                    </a>
                </div>
                    
                <div className="columnPortfolio">                     
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg5.jpg' alt="gallery" width="300" height="150" />
                            <figcaption>Touch of style</figcaption>
                        </figure>
                    </a>
                </div>

                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg6.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Simple things</figcaption>
                        </figure>
                    </a>
                </div>
            </div>

            {/* third row */}
            <div class="rowPorfolio">


                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 6})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg7.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Summer wind</figcaption>
                        </figure>
                    </a>
                </div>


                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 7})}}>
                        

                        <figure  className="imgframe">
                            <img src='../bimg8.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Shadow</figcaption>
                        </figure>
                    </a>
                </div>

                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 8})}}>
                        

                        <figure  className="imgframe">
                            <img src='../bimg9.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Walking on sunshine</figcaption>
                        </figure>
                    </a>
                </div>  

            </div>


            {/* fourth row */}
            <div class="rowPorfolio">


                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 9})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg10.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Step by step</figcaption>
                        </figure>
                    </a>
                </div>


                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 10})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg11.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Two of a kind</figcaption>
                        </figure>
                    </a>
                </div>

                <div className="columnPortfolio">
                    <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 11})}}>
                        
                        <figure  className="imgframe">
                            <img src='../bimg12.jpg' alt="gallery" width="300" height="150"/>
                            <figcaption>Undo your mind</figcaption>
                        </figure>
                    </a>
                </div>
                    
            </div>

            {isOpenImage && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpenImage: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                    }
                />
            )}

        </div>{/*closing row   */}
    </div>  {/*closing container   */}           
</section>
        );
    }
}

export default Gallery;















// import React from 'react'
// import {Container, Row, Col, Jumbotron} from "react-bootstrap"
// import Lightbox from 'react-images';
// // import "bootstrap/dist/css/bootstrap.min.css"

// export default function Portfolio() {
// return(

                        
//                         <h2>portfolio</h2>)
//     //                 
    
// //     render() {
// //       return (
// //         <Lightbox
// //           images={[{ src: '../images/bimg1.jpg' }, { src: '../images/bimg2.jpg' }]}
// //         //   isOpen={this.state.lightboxIsOpen}
// //         //   onClickPrev={this.gotoPrevious}
// //         //   onClickNext={this.gotoNext}
// //         //   onClose={this.closeLightbox}
// //         />
// //       );
// //     }
//    }



           // export default function Portfolio() {
    //         return (
    //             <div>
    //                 <Jumbotron>
    //                     <h2>portfolio</h2>
    //                 </Jumbotron>
                    
    //           {/*  <Row>
    //           <Col className="text-center">
    //             Col1
    //             </Col>

    //             <Col className="text-center">
    //             Col1
    //             </Col>
                
    //             <Col className="text-center">
    //             Col1
    //             </Col>
    //         </Row>  */}




         
    //     </div>
    // )
//}
