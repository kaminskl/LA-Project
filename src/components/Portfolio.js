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
  ];

class Gallery extends Component {
    state = {
        photoIndex: 0,
        isOpenImage: false
    }

    render() {
        const { photoIndex, isOpenImage } = this.state;
        return (
             // class="gallery-area"
             <section>
               
                    <div className="rowPorfolio">
                        <div class="columnPortfolio">                     
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 0})}}>
                                <img src='../bimg1.jpg' alt="gallery" width="350" height="250" /></a>
                        </div>

                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 1})}}>
                                <img src='../bimg2.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>
                        
                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 2})}}>
                                <img src='../bimg3.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>

                        </div>

                    <div class="rowPorfolio">
                         
                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 3})}}>
                                <img src='../bimg4.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>
                            
                        <div className="columnPortfolio">                     
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 4})}}>
                                <img src='../bimg5.jpg' alt="gallery" width="350" height="250" /></a>
                        </div>

                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 5})}}>
                                <img src='../bimg6.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>

                        </div>
                    
                    <div class="rowPorfolio">

                        
                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 6})}}>
                                <img src='../bimg7.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>

                        
                        <div className="columnPortfolio">
                            <a href onClick={e => {e.preventDefault(); this.setState({ isOpenImage: true, photoIndex: 7})}}>
                                <img src='../bimg8.jpg' alt="gallery" width="350" height="250"/></a>
                        </div>  
                    </div>

                {/* <img src='../bimg4.jpg' alt="gallery" width="150" height="100"/> */}

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
