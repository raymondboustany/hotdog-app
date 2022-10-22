import React from "react";
import "../styling/FooterStyling/Footer.css";

export default function Footer(){
    return (
       <footer className="footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3 className="title" >Services</h3>
                        <ul>
                            <li><a href="#">Dog Breeds</a></li>
                            <li><a href="#">Subscription</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3 className="title">About Us</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3 className="title">Security</h3>
                        <ul>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Legalities</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social">
                        <a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a>
                        <a href="#"><i class="icon ion-social-snapchat"></i></a>
                        <a href="#"><i class="icon ion-social-instagram"></i></a>
                        <p class="copyright">HotDog © 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
