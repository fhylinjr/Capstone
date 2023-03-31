import React from 'react';
import '../css/required-docs.css';
import { Link } from "react-router-dom";

class CollegeApp extends React.Component {
    render() {
        return (
            <div className="CollegeApp">
                <main>
                    <div className="row align-items-md-stretch">
                        <div className="bg-light border rounded-3">
                            <div className=" container-fluid embed-responsive embed-responsive-21by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/PkTvoMPjAUg" title="Applying For US Colleges As A Ghanaian International Student!!! 🇬🇭🇺🇸" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="100%" height={600} />
                            </div>
                        </div>
                    </div>
                    <hr className="col-3 col-md-2 mb-5" />
                    <h2 className="fs-5 text-center">College App Process.</h2>
                    <div className="row align-items-md-stretch">
                        <div className="col-md-4">
                            <div className="p-2 border rounded-3">
                                <p>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#commonappOverview" aria-expanded="false" aria-controls="commonappOverview">
                                        Common App Overview
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#sampleEssays" aria-expanded="false" aria-controls="sampleEssays">
                                        Sample Ghanaian Essays
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#invitingRecommenders" aria-expanded="false" aria-controls="invitingRecommenders">
                                        Inviting Recommenders
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#afterSubmission" aria-expanded="false" aria-controls="afterSubmission">
                                        What's After Submission
                                    </button>
                                </p>
                                <div className="row">
                                    <div className="collapse" id="commonappOverview">
                                        <div className="card card-body">
                                            <p> Ghanaians apply through the <a className="text-decoration-none" href="https://www.commonapp.org">Common App</a> although there is <a className="text-decoration-none" href="https://www.coalitionapp.org">Coaliton
                                                App </a>
                                                as
                                                well.
                                                Click to watch the video above for a detailed walkthrough of what the CommonApp is,
                                                the
                                                benefits, how to sign-up and fill every aspect of your
                                                application in the context of a typical Ghanaian high school student. <br />
                                                After or at any point, feel free to look to your right and look at a curated list of
                                                colleges that offer very high financial aid packages to
                                                international students. Feel free to add any of them to your Common App after
                                                exploring
                                                thier links. <br />
                                                In the meanwhile, here is a list of other sites you can use to supplement your
                                                college
                                                search information:
                                            </p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"> <a className="text-decoration-none" href="https://www.usnews.com/best-colleges">US News
                                                    &amp; Colleges</a></li>
                                                <li className="list-group-item"> <a className="text-decoration-none" href="https://www.niche.com/colleges/search/best-colleges/">College
                                                    Niche</a></li>
                                                <li className="list-group-item"> <a className="text-decoration-none" href="https://www.collegeconfidential.com">College
                                                    Confidential</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="sampleEssays" tabIndex={-1} aria-labelledby="sampleEssays" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="sampleEssaysLabel">Sample Ghanaian Essays</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <p> Checkout sample essays that got Ghanaian students into US colleges We also
                                                        provide sample emails to request for CSS Waiver Codes as well as how to
                                                        present your extra-curricular activities/honors.
                                                        Use only as inspiration.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <a className="btn btn-lg btn-primary" href="https://fhylinjr.notion.site/GH-Prep-Scholar-Samples-For-Prospective-Students-cdfa1bff3cc745879fcbdc2304e32fe4">Visit
                                                        Notion Page!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="invitingRecommenders" tabIndex={-1} aria-labelledby="invitingRecommenders" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="invitingRecommendersLabel">Inviting
                                                        Recommenders</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <p> Filling out the CommonApp is initially challenging for first-time
                                                        recommenders as well. We partnered with some
                                                        high school counselors to learn how they went through the process and it
                                                        should be applicable for teachers
                                                        and other recommenders as well.
                                                    </p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <a className="btn btn-lg btn-primary" href="https://youtu.be/pUGjzGukPg4">Watch
                                                        Tutorial!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse" id="afterSubmission">
                                        <div className="card card-body">
                                            <p> First of all, Congrats if you have received an offer letter!
                                                Watch <a className="text-decoration-none" href="https://youtu.be/X4eejts6rQw">a detailed
                                                    walkthrough</a> of all the potential steps to take after receiving an offer till orientation day on
                                                your US college campus. <br />
                                                In the meanwhile, here is a list of the topics discussed in the video:
                                            </p>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"> Review/Accept Financial Aid Package</li>
                                                <li className="list-group-item"> Pay Enrollment Deposit Fee</li>
                                                <li className="list-group-item"> Submit Official Documents For Verification</li>
                                                <li className="list-group-item"> Submit Bank Statement For I-20</li>
                                                <li className="list-group-item"> Fill More Information e.g. Physical/Health/Immunization
                                                    Records</li>
                                                <li className="list-group-item"> Pay SEVIS Fee, Fill Visa Application, Attend Visa
                                                    Interview</li>
                                                <li className="list-group-item"> Begin Prepping For Your Intended Major</li>
                                                <li className="list-group-item"> Start Saying Your Goodbye + Buying Items To Travel With
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-5 border rounded-3">
                                <table className="table table-primary table-hover table-responsive table-striped-columns">
                                    <thead>
                                        <tr>
                                            <th scope="col">College Name / Website</th>
                                            <th scope="col">Average Aid Award</th>
                                            <th scope="col">Median SAT Score / Acceptance Rate</th>
                                            <th scope="col">Meets 100% Need / Need Blind</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="https://www.minerva.edu">Minerva University</a></td>
                                            <td>$20,500</td>
                                            <td>No SAT <br /> 1.9%</td>
                                            <td>Yes <br /> Yes</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.stanford.edu">Stanford University</a></td>
                                            <td>$67,800</td>
                                            <td>1490 <br /> 5%</td>
                                            <td>Yes <br /> No</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.wesleyan.edu">Wesleyan University</a></td>
                                            <td>$74,200</td>
                                            <td>1460 <br /> 15%</td>
                                            <td>Yes <br /> No</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.dartmouth.edu">Dartmouth College</a></td>
                                            <td>$56,900</td>
                                            <td>1420 <br /> 9%</td>
                                            <td>Yes <br /> Yes</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.oberlin.edu">Oberlin College</a></td>
                                            <td>$70,500</td>
                                            <td>1360 <br /> 15%</td>
                                            <td>Yes <br /> No</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.mtholyoke.edu">Mount Holyoke College</a></td>
                                            <td>$47,800</td>
                                            <td>1300 <br /> 34%</td>
                                            <td>Yes <br /> No</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.wesleyan.edu">Amherst College</a></td>
                                            <td>$64,200</td>
                                            <td>1450 <br /> 11%</td>
                                            <td>Yes <br /> No</td>
                                        </tr>
                                        <tr>
                                            <td><a href="https://www.harvard.edu">Harvard College</a></td>
                                            <td>$76,900</td>
                                            <td>1520 <br /> 5%</td>
                                            <td>Yes <br /> Yes</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="text-center">More updates will be added soon</p>
                            </div>
                        </div>
                    </div>
                    <hr className="col-3 col-md-2 mb-5" />
                    <Link to="/financialAid"><p className="text-center my-0"><a className="btn btn-primary">Continue To Financial Aid</a></p></Link>
                    <p className="text-center my-0"> Questions? Reach out at <a href="mailto: ghprepscholar@gmail.com">ghprepscholar@gmail.com</a></p>
                    <p className="text-center my-0"><a href="#">Back to top</a></p>
                </main>

            </div>
        )
    }
}

export default CollegeApp;