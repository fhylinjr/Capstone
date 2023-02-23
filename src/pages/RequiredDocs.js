import React from 'react';
import '../css/required-docs.css';

class RequiredDocs extends React.Component {
    render() {
        return (
            <div className="RequiredDocs">
                <main>
                    {/* Features Section
  ================================================== */}
                    <div className="container">
                        <h1 className="text-center">REQUIRED GHANAIAN DOCUMENTS</h1>
                        <p className="fs-5">As a prospective Ghanaian international student, you will need the documents listed
                            below
                            for your undergraduate college application. For each document there is a brief explanation of what it
                            is,
                            and how to obtain it. It is advisable to start gathering these documents for yourself and other invitees
                            (counselors,
                            recommenders, etc.) as soon as possible.</p>
                        <p className="fs-5 col-md-8">We've also included a video explaining the entire document gathering stage for
                            those who prefer
                            that as well 😀
                        </p>
                        <hr className="col-3 col-md-2 mb-5" />
                        <div className="row g-5" data-masonry="{&quot;percentPosition&quot;: true }">
                            <div className="col-md-6">
                                <h2>Documents</h2>
                                <p>Once you have these you are ready to start applying. Documents for applying for financial aid can
                                    be
                                    accessed on the <a href="/financial aid.html">Financial Aid</a> page
                                </p>
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-doc1-list" data-bs-toggle="list" href="#list-doc1" role="tab" aria-controls="list-doc1">WASSCE Result/
                                        Certificate</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc2-list" data-bs-toggle="list" href="#list-doc2" role="tab" aria-controls="list-doc2">High School Transcript</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc3-list" data-bs-toggle="list" href="#list-doc3" role="tab" aria-controls="list-doc3">Recommendation Letters</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc4-list" data-bs-toggle="list" href="#list-doc4" role="tab" aria-controls="list-doc4">Standardized Test (SAT) Report</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc5-list" data-bs-toggle="list" href="#list-doc5" role="tab" aria-controls="list-doc5">Passport</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc6-list" data-bs-toggle="list" href="#list-doc6" role="tab" aria-controls="list-doc6">Proof of Honors/ Academic
                                        Achievements</a>
                                    <a className="list-group-item list-group-item-action" id="list-doc7-list" data-bs-toggle="list" href="#list-doc7" role="tab" aria-controls="list-doc7">Proof of Extra-Curricular
                                        Activities</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2>Explanation</h2>
                                <p>What is it and how to obtain selected document</p>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-doc1" role="tabpanel" aria-labelledby="list-doc1-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="/media/wassce cert.jpg" className="card-img-top px-5" height={300} width="100%" alt="WASSCE Certificate" />
                                            <div className="card-body">
                                                <h5 className="card-title">WASSCE Results/ Certificate</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc1" aria-expanded="false" aria-controls="collapsedoc1">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc1">
                                                    <p className="card-text">This is sometimes referred to as National Leaving Exams
                                                        Results/Certificate.
                                                        If you are still in school and applying you can provide predicted results
                                                        and indicate to the school
                                                        you will submit the final results upon reception.<br /> If you have already
                                                        completed school and you have the
                                                        original certificate keep that handy and you can obtain that by going to
                                                        your school's administration block
                                                        or office. If they do not have it yet or they recently just released the
                                                        provisional results you can access
                                                        it by going to the WAEC official website and following the instructions.
                                                    </p>
                                                    <a href="https://ghana.waecdirect.org" className="btn btn-primary">WAEC Official
                                                        Website!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc2" role="tabpanel" aria-labelledby="list-doc2-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="/media/transcript.jpeg" className="card-img-top px-5" height={300} width="100%" alt="WASSCE Certificate" />
                                            <div className="card-body">
                                                <h5 className="card-title">High School Transcript</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc2" aria-expanded="false" aria-controls="collapsedoc2">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc2">
                                                    <p className="card-text">Your Transcript is a document which shows all the subjects
                                                        you took in your high schoool years for all the terms you spent
                                                        and the overall grade you got. Usually the grade is a combination of
                                                        class grades and exam grades at the end of the term<br /> For those who have
                                                        still
                                                        not completed school, it is okay to submit an incomplete transcript. If you
                                                        get
                                                        accepted by any college and you choose to enroll, they will request for a
                                                        complete
                                                        transcript from your counselor. Any transcript you submit will mostly be
                                                        considered
                                                        UNOFFICIAL. Your counselor will have to submit the transcript on their end
                                                        for most
                                                        collegs to consider it official.<br /> You can obtain your transcript by going
                                                        to
                                                        your school's administration block or office.
                                                        Normally your counselor should be getting the transcript and submitting, but
                                                        in Ghana,
                                                        it is common for your teacher/counselor to ask you to get the transcripts
                                                        from the school
                                                        administration and forwarding it to them so they can verify it and submit it
                                                        on their end.
                                                        <br />
                                                        NOTE: Most Ghana Junior High School (JHS/Middle School) is for 3 years and
                                                        Senior High School
                                                        (SHS) is for 3 years, but in the USA, most middle school/JHS is 2 years and
                                                        high school is 4 years.
                                                        Hence some colleges might ask for the last year of your JHS results. In that
                                                        case you explain to them
                                                        and might need to submit your BECE certificate or in extreme cases try and
                                                        go to your high school if
                                                        you can for your last year of JHS transcript
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc3" role="tabpanel" aria-labelledby="list-doc3-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="/media/recommendation letter.jpg" className="card-img-top px-5" height={300} width="100%" alt="WASSCE Certificate" />
                                            <div className="card-body">
                                                <h5 className="card-title">Recommendation Letters</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc3" aria-expanded="false" aria-controls="collapsedoc3">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc3">
                                                    <p className="card-text">This is sometimes referred to as Reference Letter.
                                                        It is a statement colleges want your counselor and teachers who know you
                                                        well enough
                                                        to write to them about you as a sort of "testimonial". In your application
                                                        to colleges
                                                        you are telling them about you and why they should pick you. However, this
                                                        is a chance
                                                        for the colleges to know what other people think about you.<br /> For most
                                                        colleges you will be
                                                        required to submit a counselor recommendation and at least two teacher
                                                        recommendation. It is a
                                                        good strategy to select teachers who know you well and can speak highly of
                                                        you. Also you can consider
                                                        teachers who teach subjects related to what you intend on studying in
                                                        college. E.g if you want to study
                                                        Math, then probably you might want to consider one of your Math teachers as
                                                        a recommender.
                                                        <br /> Your teachers or counselors might be working with other students so it
                                                        is advisable to start this process
                                                        as soon as you can by politely discussing with them you plan on using them
                                                        as recommenders to get their contact details
                                                        such as emails and phone numbers so they can submit their recommendation and
                                                        evaluation on their end.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc4" role="tabpanel" aria-labelledby="list-doc4-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="./media/sat report.jpg" className="card-img-top" height={300} width="100%" alt="SAT Report" />
                                            <div className="card-body">
                                                <h5 className="card-title">Standardized Test (SAT) Report</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc4" aria-expanded="false" aria-controls="collapsedoc4">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc4">
                                                    <p className="card-text">The Standardized Aptitude Test (SAT) is administered by the
                                                        US College Board
                                                        With students from different educational systems around the world all
                                                        applying to US colleges, it is
                                                        a way for College Board to have a standardized test for every student and
                                                        colleges can use that as
                                                        one additional data point. It consists of Math (800 max points) and
                                                        Reading/Grammar (800 max points)
                                                        with an Optional Essay Aspect (24 max points).
                                                        Without the essay, the test is scored out of 1600. <br /> After you write the
                                                        test, your score report is
                                                        available in your College Board portal in about 2 weeks and most schools can
                                                        allow you to self-report your scores
                                                        on your Common Application. If you do get accepted and choose to enroll in
                                                        any college, then that college will request
                                                        for official scores which can only be submitted by College Board on your
                                                        behalf. Some schools might consider your counselor
                                                        submission as official as well. Learn more about the SAT on our <a href="/test prep.html">Test Prep</a> page or checkout the college board
                                                        website!
                                                    </p>
                                                    <a href="https://satsuite.collegeboard.org/sat/scores" className="btn btn-primary">Check SAT Scores!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc5" role="tabpanel" aria-labelledby="list-doc5-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="./media/passport.jpg" className="card-img-top" height={300} width="100%" alt="Passport" />
                                            <div className="card-body">
                                                <h5 className="card-title">Passport</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc5" aria-expanded="false" aria-controls="collapsedoc5">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc5">
                                                    <p className="card-text">You might already know most of the information on your
                                                        passport
                                                        such as name, date of birth and place of birth but these are normally
                                                        required when
                                                        filling your college application. Some colleges might even require you
                                                        upload your passport.
                                                        <br /> Eventually, if you get accepted into a college and you enroll, you will
                                                        need it and because
                                                        the Ghana Passport Office takes very long to process it, it is advisable to
                                                        start the process as early
                                                        as you can. You can go to your local Passport Office to start the process of
                                                        securing yours or visit
                                                        the site below
                                                    </p>
                                                    <a href="https://passport.mfa.gov.gh" className="btn btn-primary">Begin Ghana
                                                        Passport Process!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc6" role="tabpanel" aria-labelledby="list-doc6-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="./media/extracurricular.jpg" className="card-img-top" height={300} width="100%" alt="Proof of Honors" />
                                            <div className="card-body">
                                                <h5 className="card-title">Proof of Honors/ Academic
                                                    Achievements</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc6" aria-expanded="false" aria-controls="collapsedoc6">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc6">
                                                    <p className="card-text">
                                                        Were you overall best student in your class? Or 2nd Best Chemistry Student?
                                                        Or did you even do National Science and Math Quiz? If there were
                                                        any honors or academic awards/ accolades you got during high school, you can
                                                        start gathering the plaques or
                                                        certificates because colleges will want to know them. Even if you do not
                                                        have evidences for them, it is fine, as
                                                        long as your counselor can put it in their recommendation letters. If you
                                                        have evidence then even better start gathering them
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-doc7" role="tabpanel" aria-labelledby="list-doc7-list">
                                        <div className="card" style={{ width: '100%', objectFit: 'cover !important' }}>
                                            <img src="./media/extracurricular.jpg" className="card-img-top" height={300} width="100%" alt="Proof of Extra-Curricular" />
                                            <div className="card-body">
                                                <h5 className="card-title">Proof of Extra-Curricular Activities</h5>
                                                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoc7" aria-expanded="false" aria-controls="collapsedoc7">
                                                    Show More
                                                </button>
                                                <div className="collapse" id="collapsedoc7">
                                                    <p className="card-text">Although most of you will be in college to primarily learn,
                                                        colleges want to know how well-rounded you were as a student.
                                                        What things did you do outside the classroom? Debate? Red Cross? Volunteer?
                                                        Did you play football or inter-school sports competitions? Do you play any
                                                        instruments?
                                                        <br /> If you have evidences in the form of certificate, awards, videos,
                                                        pictures you can start gathering them.
                                                        It will be very important and you will be asked to list them at some point
                                                        in your application.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="col-3 col-md-2 mb-5 mt-5" />
                        <div className="row bg-light rounded-3">
                            <div className=" container-fluid embed-responsive embed-responsive-21by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YLqeiNpyqD0" title="Required Documents For US College Applications !!! 🇬🇭🇺🇸" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" width="100%" height={600} />
                            </div>
                        </div>
                    </div>
                    <p className="text-center my-0"><a href="/test prep.html" className="btn btn-primary">Continue To Test Prep</a></p>
                    <p className="text-center my-0"> Questions? Reach out at <a href="mailto: ghprepscholar@gmail.com">ghprepscholar@gmail.com</a></p>
                    <p className="text-center my-0"><a href="#">Back to top</a></p>
                </main>

            </div>
        )
    }
}

export default RequiredDocs;