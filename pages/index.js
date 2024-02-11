import React from "react";

import styles from './index.module.scss'
import Head from "next/head";
import Image from "next/image";

const HomePage =()=>{
    return(
        <>
        {/* <div className={styles['navigatorContainer']}>

        </div> */}
        <div className={styles["homePageContainer"]}>

            <div className={styles["headingContatiner"]}>
                <h1>PORTFOLIO</h1>
                <div className={styles['portfolioYear']}>
                    <h2>2024</h2>
                </div>
            </div>

            <div className={styles['bgImg']}>
                <Image
                src="/myPic.png" 
                fill={true}
                />
            </div>
            {/* 
            <div className={styles["personalDetails"]}>
                <div className={styles['designation']}>
                    <h3>Frontend Developer</h3>
                </div>
                <div className={styles['emailContact']}>
                    <div className={styles['nameContainer']}>
                        <h3>Kushagra Mishra</h3>
                    </div>
                    <div className={styles['emailContainer']}>
                        <h3>mishrash64@gmail.com</h3>
                    </div>
                </div>
            </div> 
            */}
        </div>

        <div className={styles["introContainer"]}>
                <div className={styles["heading"]}>
                    <h3>hello !</h3>
                </div>

                <div className={styles['introPara']}>
                    <p>
                        I'm Kushagra Mishra working as a Frontend Developer working from past
                        1 year at a product based company that deals with travell and tourism , 
                        I can develop whatever comes in your Dream or Mind .
                    </p>

                    <p>Welcome to my portfolio - hope you like it !</p>
                </div>

                <div className={styles['digitalSign']}>
                    <h3>Kushagra Mishra</h3>
                </div>
        </div>

        <div className={styles['skillsContainer']}>
            <div className={styles['skillsHeading']}>
                <h2>Skills</h2>
            </div>
            <div className={styles['listing']}>
                <div className={styles['reactLogo']}>
                <Image
                src={'/reactLogo.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/nextjs.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/nodejs.png'}
                fill={true}
                />
                </div>
                
                <div className={styles['reactLogo']}>
                <Image
                src={'/awss3.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/git.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/js.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/mongo.png'}
                fill={true}
                />
                </div>
                <div className={styles['reactLogo']}>
                <Image
                src={'/postgre.png'}
                fill={true}
                />
                </div>

                <div className={styles['reactLogo']}>
                <Image
                src={'/sass.png'}
                fill={true}
                />
                </div>
                <div className={styles['reactLogo']}>
                <Image
                src={'/tailwinf.png'}
                fill={true}
                />
                </div>
                <div className={styles['reactLogo']}>
                <Image
                src={'/sql.png'}
                fill={true}
                />
                </div>
            </div>
        </div>

        <div className={styles["projectContainer"]}>
            <div className={styles['heading']}>
                <h3>Projects</h3>
            </div>

            <div className={styles['listing']}>
                <div className={styles["projectCard"]}>
                    <Image
                    src={'/js.png'}
                    fill={true}
                    />
                    <div className={styles['cardDetailsContainer']}>
                        <div className={styles['card']}>
                            <div className={styles['heading']}>
                            <h3>Flight Seat Map</h3>                            
                            </div>
                            <div className={styles['techStack']}>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>JavaScript</li>
                                    <li>SCSS</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                            <div className={styles['desc']}>
                                <p>Developed a flight seatMap for the organisation by creating dynamic flight blueprint according to the response 
                                    recived by the provider and giving user a new feature so that they can select whichever seat they want .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles['contactContainer']}>
            <div className={styles['heading']}>
                <h3>Want to create the next BIG thing ?</h3>
            </div>

            <div className={styles['links']}>
                <div className={styles['logo']}>
                    <Image
                    src="/linkedin.png" 
                    fill={true}
                    />
                </div>
                <div className={styles['logo']}>
                    <Image
                    src='/gmail.png'
                    fill={true}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;