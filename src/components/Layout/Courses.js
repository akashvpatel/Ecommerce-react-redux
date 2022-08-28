import React from 'react'
import classes from "./Courses.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import webpic from "../../asset/web.png"
const Courses = () => {
    return (
        <div>
            <Carousel autoFocus={true} autoPlay={true} infiniteLoop={true} >
                <div className={classes.header}>
                    <div className={classes.text}>
                        <span>
                            <h1> Full Stack <br />
                                Web  Development <br />
                                Course</h1>
                        </span>


                    </div>


                </div>
                <div className={classes.header}>
                    <div className={classes.text}>
                        <span>
                            <h1>Highest Rated Android <br />
                                Development <br />
                                Course</h1>
                        </span>


                    </div>

                </div>

            </Carousel>


        </div>
    )
}

export default Courses