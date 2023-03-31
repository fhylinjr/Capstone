import React from 'react';
import '../css/carousel.css';
import '../css/infinitecarousel.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                {/*HomePage Main Content*/}
                <main>
                    <div id="myCarousel" className="carousel slide bg-secondary" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="./media/ytcp.jpeg" height="100%" width="100%" />
                    </svg>*/}
                                <img src="./media/ytcp.jpeg" className="d-block w-100" />
                                <div className="container">
                                    <div className="carousel-caption text-start">
                                        <h1 className="display-3 lineUp">Welcome to GH Prep Scholar.</h1>
                                        <p className="fw-bold lineUp"><mark>Your one stop for successful and complete US college
                                            application as a Ghanaian.</mark></p>
                                            <Link to="/requiredDocs"><p><a className="btn btn-lg btn-primary">Begin Process!</a></p></Link>
                                        {/*<Link to="/requiredDocs"><button type="button" class="btn btn-primary">Begin Process!</button></Link>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777" />
                    </svg>*/}
                                <img src="./media/youtube released.png" className="d-block w-100  bd-placeholder-img" width="100%" height="100%" />
                                <div className="container">
                                    <div className="carousel-caption">
                                        <h1 className="display-3 pop-outin">YouTube Tutorials Now Available!</h1>
                                        <p className="fw-bold"><mark>Follow our YouTube Channel for an extensive breakdown of how to
                                            complete all the different steps.</mark></p>
                                        <p><a className="btn btn-lg btn-primary" href="https://www.youtube.com/@ghprepscholar">Enjoy
                                            Content!</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/*<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777" />
                    </svg>*/}
                                <img src="./media/discord community.jpg" className="d-block w-100 bd-placeholder-img" width="100%" height="100%" />
                                <div className="container">
                                    <div className="carousel-caption text-end">
                                        <h1 className="display-3 lineUp">Discord &amp; Telegram Community Coming Soon!</h1>
                                        <p className="fw-bold lineUp"><mark>Stay tuned to join a community of like-minded individuals
                                            and stay motivated and informed. There is strength in numbers!</mark></p>
                                        <p><a className="btn btn-lg btn-primary" href="https://t.me/+NKgaatJqg7w3Yjk0">Indicate
                                            Interest!</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Features Section
  ================================================== */}
                    <div className="container">
                        <div className="container marketing">
                            {/* 4 columns of text below the carousel */}
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-6">
                                    <svg className="bd-placeholder-img bi bi-list-check" width={140} height={140} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    <h2 className="fw-normal">Required Docs</h2>
                                    <p>Wondering all the documents you need for a successful application, what they are and how to
                                        obtain them? We've got you!</p>
                                    <Link to="/requiredDocs"><p><a className="btn btn-lg btn-primary">Take me there! »</a></p></Link>
                                </div>{/* /.col-lg-4 */}
                                <div className="col-lg-3 col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={140} height={140} fill="currentColor" className="bi bi-pencil bd-placeholder-img" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                    <h2 className="fw-normal">Test Prep</h2>
                                    <p>Wondering how or which materials are the most recommended in the market for SAT preparation?
                                        This is your one-stop as well</p>
                                        <Link to="/testprep"><p><a className="btn btn-lg btn-primary">Take me there! »</a></p></Link>
                                </div>{/* /.col-lg-4 */}
                                <div className="col-lg-3 col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={140} height={140} fill="currentColor" className="bd-placeholder-img bi bi-laptop" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                                    </svg>
                                    <h2 className="fw-normal">College App</h2>
                                    <p>Here, we can show you how to apply to your dream US colleges.Take a look at insider tips on how to get past one of the most nuanced stages.</p>
                                    <Link to="/apply"><p><a className="btn btn-lg btn-primary">Take me there! »</a></p></Link>
                                </div>{/* /.col-lg-4 */}
                                <div className="col-lg-3 col-md-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={140} height={140} fill="currentColor" className="bd-placeholder-img bi bi-cash-coin" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
                                        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
                                        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
                                        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
                                    </svg>
                                    <h2 className="fw-normal">Financial Aid</h2>
                                    <p>And lastly we break what is required and how to complete successful financial aid/
                                        scholarship applications. i.e need-based versus merit-based</p>
                                        <Link to="/financialAid"><p><a className="btn btn-lg btn-primary">Take me there! »</a></p></Link>
                                </div>{/* /.col-lg-4 */}
                            </div>{/* /.row */}
                            {/* INFINITE SCHOOLS CAROUSEL */}
                            <div className="slider mt-5">
                                <div className="slide-track">
                                    <div className="slide">
                                        <img src="./media/minerva university.jpeg" height={100} width={150} alt="Minerva University Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/harvard logo.jpeg" height={100} width={100} alt="Harvard University Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/stanford logo.jpeg" height={100} width={150} alt="Stanford University Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/colby logo.jpeg" height={100} width={100} alt="Colby College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/middlebury logo.jpg" height={100} width={100} alt="Middlebury College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/carleton.jpeg" height={100} width={150} alt="Carleton College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/wellesley.jpg" height={100} width={150} alt="Wellesley College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/swarthmore.jpg" height={100} width={100} alt="Swarthmore College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/amherst.jpg" height={100} width={150} alt="Amherst College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/nyu.jpg" height={100} width={150} alt="Williams College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/dartmouth.jpg" height={100} width={150} alt="Dartmouth College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/mount holyoke.jpg" height={100} width={150} alt="Mount Holyoke College Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/princeton.jpeg" height={100} width={150} alt="Princeton University Logo" />
                                    </div>
                                    <div className="slide">
                                        <img src="./media/vassar.jpeg" height={100} width={150} alt="Vassar College Logo" />
                                    </div>
                                </div>
                            </div>
                            {/* START THE FEATURETTES */}
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7">
                                    <h2 className="featurette-heading fw-normal lh-1"><a href="https://youtube.com/playlist?list=PLK_coAouRKGMi267s8-F6vPZ_pfQEd7aG" className="text-decoration-none">Success Stories. <span className="text-muted">We've
                                        all been where you are now.</span></a></h2>
                                    <p className="lead">If this helps, stay tuned for success stories of how Ghanains currently studying
                                        in the US navigated the entire process.</p>
                                </div>
                                <div className="col-md-5">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto  mt-5" width={500} height={300} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <image href="./media/ytdp.jpeg" width="100%" height="100%" className="img-fluid" />
                                    </svg>
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7 order-md-2">
                                    <h2 className="featurette-heading fw-normal lh-1"> <a href="https://fhylinjr.notion.site/GH-Prep-Scholar-Samples-For-Prospective-Students-cdfa1bff3cc745879fcbdc2304e32fe4" className="text-decoration-none">Sample Successful College App Essays.</a> <span className="text-muted">See
                                        for yourself.</span></h2>
                                    <p className="lead">Of course, coming up with the essay that will wow the US college admissions
                                        committees is not easy. We are here to offer samples of what previous applicants wrote to
                                        get them into their dream colleges. Please use as inspiration</p>
                                </div>
                                <div className="col-md-5 order-md-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={300} height={300} fill="currentColor" className="bi bi-patch-question bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-5" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                    </svg>
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            <div className="row featurette">
                                <div className="col-md-7">
                                <Link to="/contactUs" style={{ textDecoration: 'none' }}><h2 className="featurette-heading fw-normal lh-1">And lastly.<span className="text-muted">FAQs!</span>
                                    </h2></Link>
                                    <p className="lead">And yes, we know you might still have a gazillion questions hence we are
                                        compiling a list of concerns and will provide answers. Keep the questions coming!</p>
                                </div>
                                <div className="col-md-5 px-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={300} height={300} fill="currentColor" className="bi bi-patch-question bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-5" viewBox="0 0 16 16" style={{ color: 'cornflowerblue' }} preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                                        <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                                        <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                                    </svg>
                                </div>
                            </div>
                            <hr className="featurette-divider" />
                            {/* /END THE FEATURETTES */}
                        </div>{/* /.container */}
                    </div>
                    <p className="text-center my-0"> Questions? Reach out at <a href="mailto: ghprepscholar@gmail.com">ghprepscholar@gmail.com</a></p>
                    <p className="text-center my-0"><a href="#">Back to top</a></p>
                </main>

            </div>
        );
    }
}

export default Home;
