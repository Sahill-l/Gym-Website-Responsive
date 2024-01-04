import React, { useEffect, useState } from "react";
import Aos from "aos";
import Typed from "react-typed";


const Main = () => {
    const [inputHeight, setHeight] = useState("");
    const [inputWeight, setWeight] = useState("");
    const [bmi, setBMI] = useState(null);
    const [error, setError] = useState('');
    var msg = document.getElementById("calculate-msg");

    const handleHeight = (event) => {
        setHeight(event.target.value);

    }
    const handleWeight = (event) => {
        setWeight(event.target.value);
    }

    const calculateBMI = (e) => {

        // e.preventDefault(); // Prevent the default form submission behavior

        // Ensure both height and weight are provided
        if (!inputHeight || !inputWeight) {
            setError('Please provide both height and weight.');
            setBMI(null);
            e.preventDefault();
            return;
        }
        const heightMeters = parseFloat(inputHeight) / 100;
        const weightKg = parseFloat(inputWeight);
        const calculatedBMI = weightKg / (heightMeters * heightMeters);
        setBMI(calculatedBMI.toFixed(2));
        e.preventDefault();

    }

    return (

        <>
            {/* Here we have our header with navbar */}
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"></a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 text-secondary" >Home</a></li>
                            <li><a href="#Prog" className="nav-link px-2 text-white">Programs</a></li>
                            <li><a href="#Price" className="nav-link px-2 text-white">Pricing</a></li>
                            <li><a href="#BMI" className="nav-link px-2 text-white">BMI</a></li>
                            <li><a href="#Brand" className="nav-link px-2 text-white">Brands</a></li>
                            {/* <li><a href="#" className="nav-link px-2 text-white">About</a></li> */}
                        </ul>

                        <div className="text-end">
                            <button type="button" className="btn btn-warning start-btn"><a href="#">GET STARTED <span><i className="ri-arrow-right-line"></i></span></a></button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Now, here we create our banner section */}
            <div className="container banner-section ">
                <div className="row ">
                    <div className="col-md-6 home_container" data-aos="fade-down" data-aos-duration="2000">
                        <div className="details">
                            <h2 id="home__subtitle">MAKE YOUR</h2>
                            <Typed className="home_title" strings={["BODY SHAPE"]} typeSpeed={80} backSpeed={50} loop></Typed>
                            <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse magni voluptas placeat dolor aperiam sequi iure vel optio consectetur. Repellat reprehenderit ut incidunt sunt minima ad autem sit ex nam voluptatibus? Explicabo corporis laudantium, quos nostrum hic debitis labore dicta et. Placeat neque quidem voluptatum beatae cum illum architecto!</p>
                            <div className="btn btn-success start-btn Program-button"><a href="#">GET STARTED </a><span><i className="ri-arrow-right-line move-arrow"></i></span></div></div>
                    </div>

                    <div className="col-md-6" data-aos="fade-up-left" data-aos-duration="2000">
                        <img className="banner-image" src="/images/girl-boy-gym.png" alt="banner background"></img>
                    </div>
                </div>
            </div>


            {/* Here we create our Programs section */}
            <div className="container d-flex justify-content-center" id="Prog">
                <div className="row">
                    <div className="col">
                        <div className="program-heading"><h1>OUR PROGRAM</h1></div>
                        <div className="program-subtitle">BUILD YOUR DREAM BODY HERE WITH OUR DIFFERENT OFFERS</div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-4 g-5 ">
                <div className="row">
                    <div className="col-md-6  program-section mb-xs-5" data-aos="flip-up" data-aos-duration="2000">
                        <div className="program-card">
                            <div className="program-logo">
                                <img className="program-img" src="/images/dumbell1.png"></img>
                            </div>
                            <h3 className="program-title">Muscle Gain Program</h3>
                            <p className="program-description">Workout programs for building muscle should primarily rely on compound and isolation movements with weights, but adjust the specific exercises, sets, and repetitions to ensure consistent, long-term gains in both muscle size and strength</p>
                            <div className="btn btn-success program-arrow"><a><i className="ri-arrow-right-line arrow"></i></a></div>
                        </div>
                    </div>

                    <div className="col-md-6  program-section mb-xs-5" data-aos="flip-up" data-aos-duration="2000">
                        <div className="program-card">
                            <div className="program-logo">
                                <img className="program-img" src="/images/dumbbell.png"></img>
                            </div>
                            <h3 className="program-title">Weight Lifting</h3>
                            <p className="program-description ">Alternating sessions for major muscle groups. Training, say, arms, shoulders and back one session, then legs buttocks, abdominals the next session. Periodization could be described as progressing or cycling phases of training over a set time in order to achieve results at a scheduled time.</p>
                            <div className="btn btn-success program-arrow"><a><i className="ri-arrow-right-line arrow"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="row gy-5 mt-4">
                    <div className="col-md-6  program-section mb-xs-5" data-aos="flip-up" data-aos-duration="2000">
                        <div className="program-card">
                            <div className="program-logo">
                                <img className="program-img" src="/images/heart-monitor.png"></img>
                            </div>
                            <h3 className="program-title">Cardio Exercises</h3>
                            <p className="program-description">Viable options include hiking, jogging, cycling, rowing, running, and elliptical training. Just remember, it is any activity that increases your breathing and heart rate! At the start of every session, take 5-10 minutes to gradually rev up your cardiovascular system and improve blood flow to your muscles</p>
                            <div className="btn btn-success program-arrow"><a><i className="ri-arrow-right-line arrow"></i></a></div>
                        </div>
                    </div>

                    <div className="col-md-6  program-section mb-xs-5" data-aos="flip-up" data-aos-duration="2000">
                        <div className="program-card">
                            <div className="program-logo">
                                <img className="program-img" src="/images/yoga.png"></img>
                            </div>
                            <h3 className="program-title ">Yoga Sessions</h3>
                            <p className="program-description">This dynamically flowing practice synchronizes postures with the breath. This is a swift moving, theme-based class with mantra, mudra, pranayama (breath), surya namaskaras (sun salutations), standing asanas, twists, balances, core strengthening postures, backbends and inversions and a looong rest at the end.</p>
                            <div className="btn btn-success program-arrow"><a><i className="ri-arrow-right-line arrow"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Now, here we create our Calculate BMI Section        */}
            <div className="container-fluid calculate-section bmi-section mb-5 mt-5" id="BMI">
                <div className="row">
                    <div className="col-md-6 calculate-sec-title">
                        <div className="all-bmi-details">
                            <div className="bmi-heading">
                                <Typed className=" bmi-title" strings={["CALCULATE"]} typeSpeed={60} backSpeed={60} loop></Typed>
                                <h1 className="bmi-subtitle ">YOUR BMI</h1>
                            </div>
                            <div className="bmi-description">
                                <p>BMI is a reasonable indicator of body fat for both adults and children. Because BMI does not measure body fat directly, it should not be used as a diagnostic tool. Instead, BMI should be used as a measure to track weight status in populations and as a screening tool to identify potential weight problems in individuals.</p>
                            </div>
                            <div className="bmi-form">
                                <form id="bmi-form">
                                    <div className="bmi-input border d-flex">
                                        <input type="number" placeholder="Enter Your Height" className="calculate-input-fields" id="bmi-height" value={inputHeight} onChange={handleHeight} />
                                        <label htmlFor="bmi-height ps-5" className="calculate-label">cm</label>
                                    </div>
                                    <div className="bmi-input border d-flex mt-5">
                                        <input type="number" placeholder="Enter Your Weight" className="calculate-input-fields" id="bmi-weight" value={inputWeight} onChange={handleWeight} />
                                        <label htmlFor="bmi-weight" className="calculate-label">kg</label>
                                    </div>
                                    <button className="button mt-4 bmi-btn" type="submit" onClick={calculateBMI}>Calculate BMI <i className="ri-arrow-right-line"></i></button>
                                </form>
                                {error && <p className="error">{error}</p>}
                                {/* {bmi !== null && (<p>Your BMI is: {bmi}</p>)} */}
                                {bmi !==null &&bmi<18.5 && <p id="calculate-msg">Your BMI is: {bmi} and youre under Weight.</p> }
                                {bmi !==null &&bmi>18.5 && bmi<25 && <p id="calculate-msg">Your BMI is: {bmi} and You're normal-Weight.</p>}
                                {bmi !==null &&bmi>=25 && bmi<30 && <p id="calculate-msg">Your BMI is: {bmi} and You're over-Weight.</p> }
                                 {bmi !==null &&bmi>=31  && <p id="calculate-msg">Your BMI is: {bmi} and You're in Obesity Category.(Loose your weight by purchase our affordable offers mentioned below 👇)</p>}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="bmiimage " src="/images/girl_cardio.png" />
                    </div>
                </div>
            </div>

            {/* Here we create pricing section */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 pricing-sec1">
                        <div className="pricing-heading">Pricing</div>
                        <div className="pricing-subheading"><span className="special-letter">OUR</span> BEST PLANS LISTED HERE</div>
                    </div>
                </div>
            </div>

            <div className="container pricing-sec2" id="Price">
                <div className="row">
                    <div className="col-md-4 pricing-card" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="inner-pricing-section  mt-5">
                            <div className="pricing-logo">
                                <img src="/images/pricing1.png" alt="pricing-logo" />
                            </div>
                            <h2 className="pricing-title">BASIC <br></br> PACKAGE</h2>
                            <h2>$200</h2>
                            <div className="pricing-list pt-4">
                                <ul>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Sweat-Shirt</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Shaker Bottle</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 6 days in a week</li>
                                    <li className="disabled"><i className="ri-checkbox-circle-line"></i> Free Advanced Videos For New Exercises.</li>
                                    <li className="disabled"><i className="ri-checkbox-circle-line"></i> Muscle Stretching</li>
                                    <li className="disabled"><i className="ri-checkbox-circle-line"></i> Free Cafe Diet</li>
                                </ul>
                                <div className="btn btn-success purchase-btn">PURCHASE NOW</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-card" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="inner-pricing-section  mt-5">
                            <div className="pricing-logo">
                                <img className="pricing-logo" src="/images/pricing2.png" alt="pricing-logo" />
                            </div>
                            <h2 className="pricing-title">PREMIUM <br></br> PACKAGE</h2>
                            <h2>$450</h2>
                            <div className="pricing-list pt-4">
                                <ul>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Sweat-Shirt</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Shaker Bottle</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 6 days in a week</li>
                                    <li><i className="ri-checkbox-circle-line"></i> Free Advanced Videos For New Exercises.</li>
                                    <li className="disabled"><i className="ri-checkbox-circle-line"></i> Muscle Stretching</li>
                                    <li className="disabled"><i className="ri-checkbox-circle-line"></i> Free Cafe Diet</li>
                                </ul>
                                <div className="btn btn-success purchase-btn">PURCHASE NOW</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 pricing-card" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="inner-pricing-section  mt-5">
                            <div className="pricing-logo">
                                <img src="/images/pricing3.png" alt="pricing-logo" />
                            </div>
                            <h2 className="pricing-title">DIAMOND <br></br> PACKAGE</h2>
                            <h2>$600</h2>
                            <div className="pricing-list pt-4 ">
                                <ul>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Sweat-Shirt</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 1 Shaker Bottle</li>
                                    <li><i className="ri-checkbox-circle-line"></i> 6 days in a week</li>
                                    <li><i className="ri-checkbox-circle-line"></i> Free Advanced Videos For New Exercises.</li>
                                    <li><i className="ri-checkbox-circle-line"></i> Muscle Stretching</li>
                                    <li><i className="ri-checkbox-circle-line"></i> Free Cafe Diet</li>
                                </ul>
                            </div>
                            <div className="btn btn-success purchase-btn">PURCHASE NOW</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Here we create brand partner logo sections */}
            <div className="container logo_section  mt-5" id="Brand">
                <div className="row logo_container ms-5 ">
                    <div className="col-md-6 col-xl-3 ms-md-0 ms-sm-5 logos" data-aos="zoom-out" data-aos-duration="3000">
                        <img src="/images/logo1.png" alt="logo1" />
                    </div>
                    <div className="col-md-6 col-xl-3 logos" data-aos="zoom-in" data-aos-duration="3000">
                        <img src="/images/logo2.png" alt="logo2" />
                    </div>
                    <div className="col-md-6 col-xl-3 logos" data-aos="zoom-out" data-aos-duration="3000">
                        <img src="/images/logo3.png" alt="logo3" />
                    </div>
                    <div className="col-md-6 col-xl-3 logos" data-aos="zoom-in" data-aos-duration="3000">
                        <img src="/images/logo4.png" alt="logo4" />
                    </div>
                </div>
            </div>

            {/* Here we create our footer */}
            <footer className="py-5 container-fluid bg-dark footer mt-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h3>Services</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0  text-light">Flex Muscles</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Cardio Exercises</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Yoga</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h3>Pricing</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Basic</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Premiun</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Diamond</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h3>Company</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">About Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Careers</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Customers</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Partners</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>© 2023 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#">twitter</a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#">facebook</a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#">insta</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Main

