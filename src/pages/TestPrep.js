import React from 'react';
import '../css/required-docs.css';

class TestPrep extends React.Component {
    render() {
        return (
            <div className="TestPrep">
                <main>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-4">
                            <div className="p-5 text-bg-primary rounded-3">
                                <h2 className="display-5 fw-bold">SAT</h2>
                                <p>Although most US colleges are test-optional now due to COVID, it is recommended as a Ghanaian to
                                    take the SAT
                                    as the WASSCE results do not weight much compared to other exams such as IB, GSCE A-Levels,
                                    etc.<br />
                                    On your right is an in-depth video explaining what the SAT is about and the exact steps to
                                    register to
                                    take the test in Ghana.
                                    Once done with the video, hit the "REGISTER" button to proceed to College Board to register.
                                    <br />
                                    NOTE: From 2023, the SAT Test will be administered digitally in Ghana; Meaning you will be
                                    required to use a laptop
                                    at the test center to take the test.
                                </p>
                                <button className="btn btn-light" type="button"><a href="https://satsuite.collegeboard.org/sat/scores" className="text-decoration-none">REGISTER</a></button>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="bg-light border rounded-3">
                                <div className=" container-fluid embed-responsive embed-responsive-21by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pcpUmWpRF3Q" title="SAT Test Prep For US College Applications !!! 🇬🇭🇺🇸" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="100%" height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="col-3 col-md-2 mb-5" />
                    <p className="fs-5 text-center">There are 2 main approaches we discuss here to prepare for the SAT 📚.</p>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="p-5 border rounded-3">
                                <h2 className="display-5 fw-bold">Approach 1: Prep On Your Own!</h2>
                                <p>The biggest advantage with prepping on your own is you get to do so at your own pace with no
                                    thousands of
                                    Ghanaian cedis spent. Luckily, we have compiled a list of the best books/resources available to
                                    prep with.
                                    They are avialable with just a Google Search or either getting a copy on Amazon or using their
                                    website.
                                    If all else fails, you can contact us and we will help you secure one or you can contact/visit
                                    any of
                                    the test prep agencies mentioned on the right to only purchase SAT materials because they
                                    usually have copies.
                                </p>
                                <p>
                                    Platforms/Websites:
                                </p><ul className="list-group list-group-flush">
                                    <li className="list-group-item"> <a href="https://www.khanacademy.org">Khan Academy</a> (Absolutely
                                        FREE! and would
                                        highly recommend)</li>
                                    <li className="list-group-item"> <a href="https://www.princetonreview.com/college/sat-test-prep?ceid=nav-hs">Princeton
                                        Review</a> (Paid - $300
                                        sign up fee SAT Only self-paced)</li>
                                    <li className="list-group-item"> <a href="https://www.kranse.com">Kranse Institute</a> (Paid - $250
                                        sign up fee)</li>
                                </ul>
                                <p />
                                <p>
                                    Books:
                                </p><ul className="list-group list-group-flush">
                                    <li className="list-group-item"> <a href="https://www.amazon.com/SAT-Prep-Black-Book-Strategies/dp/0692916164">SAT
                                        Blackbook</a> (Math &amp;
                                        Reading/Writing)</li>
                                    <li className="list-group-item"> <a href="https://thecollegepanda.com/books/">Panda Math SAT</a>
                                        (Math)</li>
                                    <li className="list-group-item"> <a href="https://www.amazon.com/Barrons-Math-Workbook-NEW-SAT/dp/1438006217">Barron Math
                                        SAT</a> (Math)
                                    </li>
                                    <li className="list-group-item"> <a href="https://thecriticalreader.com/books-3/">Erica Meltzer</a>
                                        (Reading/Writing)</li>
                                    <li className="list-group-item"> <a href="https://www.kaptest.com/sat/books">Kaplan SAT</a> (Math &amp;
                                        Reading/Writing)</li>
                                </ul>
                                <p />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-5 border rounded-3">
                                <h2 className="display-5 fw-bold">Approach 2: Sign Up With A Test Prep Agency!</h2>
                                <p>If you prefer to join a test prep, it has the benefits of meeting like-minded high school
                                    graduates
                                    with similar ambitions and you can make new friends, learn from expert tutors standing right
                                    in front of you . You also have access to other services beyond just prepping for the SAT, such
                                    as:
                                    essay/application reviews, financial aid application submission, etc.
                                    These are extra services that come with addional fees.
                                    If you decide to go with this and have some money to spare, then this is a curated list of the
                                    best SAT
                                    test prep agencies in the country:
                                </p>
                                <table className="table table-primary table-hover table-responsive table-striped-columns">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location(s)</th>
                                            <th scope="col">Price/ Other Info</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="https://yafghana.org">Young Achievers Foundation (YAF) Ghana</a></td>
                                            <td>Kumasi</td>
                                            <td>Tuition: GHC 2000. If you get an official SAT score &gt;= 1490 they will provide other
                                                extra services including
                                                those mentioned above for free
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.afextestprep.com">AFEX Test Prep</a></td>
                                            <td>Accra / Kumasi / Takoradi</td>
                                            <td>Tuition: GHC 4000 ; Extra Services: GHC 12000. If you perform well on your SAT you
                                                can become a tutor for the
                                                incoming batch to help offset your fees while awaiting college decisions
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.afextestprep.com">Timeline Trust</a></td>
                                            <td>Accra / Kumasi</td>
                                            <td>Tuition: GHC 2000 ; Extra Services: GHC 5000.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://aikinseduconsult.com">Aikins Educational Consult</a></td>
                                            <td>Accra</td>
                                            <td>Tuition: GHC 2500
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <hr className="col-3 col-md-2 mb-5" />
                    <p className="text-center my-0"><a href="/college app.html" className="btn btn-primary">Continue To College Apps</a></p>
                    <p className="text-center my-0"> Questions? Reach out at <a href="mailto: ghprepscholar@gmail.com">ghprepscholar@gmail.com</a></p>
                    <p className="text-center my-0"><a href="#">Back to top</a></p>
                </main>

            </div>
        )
    }
}

export default TestPrep;