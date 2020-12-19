import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div>
        <div className="carousel-wrapper"> 
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="../img4.jpg" alt=""></img>
                    <p className="legend"></p>
                </div>
                <div>
                    <img src="../img3.jpg" alt=""></img>
                </div>
                <div>
                    <img src="../img2.jpg" alt=""></img>
                </div>
            </Carousel>
        </div>
        <table id="homeTable">
        <tr> 
            <td class="col1 pad">
                <h2>Testimonials</h2>
                    <p><em> Thank you for such a beautiful addition to my home. I'm so pleased to have your unique art piece with its colors, texture and expressiveness.   ~ Barbara</em></p>
                    <p><em> This is just a stunning piece and more than meets my expectactions. I absolutly love it.  ~ Tara</em></p>
                    <p><em> We love our new painting. The colors are alive! We are looking forward to your future works.  ~ Brenda and Tom</em></p>
            </td>
            <td class="col2 pad">
                <h2>Displays</h2>
                    <ul class="list1">
                        <li><em>Second Cup Coffee Co. Rochdale Blvd, Regina, SK</em></li><br></br>
                        <li><em>Western Pizza Downtown 2125 11th Ave, Regina, SK</em></li><br></br>
                        <li><em>Nemesis Coffee Gastown 302 Hastings St, Vancouver, BC</em></li>
                    </ul>
            </td>
        </tr>          
        </table>
        </div>

 
    );
}

