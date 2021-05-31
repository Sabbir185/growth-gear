import React from 'react';
import './Dashboard.css'
import question from '../../images/Group 90.png'
import info from '../../images/Group 91.png'
import Contents from '../Contents/Contents';

const Dashboard = () => {

    return (
        <section>
            <div className="row">
                <form className="col details-container">
                    <div className="d-flex justify-content-between que-img">
                        <h5>Enter Details</h5>
                        <img src={question} alt="" className="d-block" />
                    </div>

                    <div className="textarea-container">
                        <textarea className="form-control" name="" id="" cols="" rows="5" placeholder="Product Description"></textarea>
                    </div>

                    <div className="progressBar">
                        <div></div>
                    </div>
                    <p className="status">Poor</p>

                    <div className="d-flex align-items-center">
                        <input type="text" className="form-control mt-4 w-100 d-block f-size" placeholder="Keyword (3-5 Remembered, Comma Separate)"/>
                        <img src={info} alt="info" className="info-img d-block" />
                    </div>
                    <input type="text" className="form-control mt-4 f-size" placeholder="Keyword to Avoid (3-5 Remembered, Comma Separate)"/>

                    <input type="submit" value="Generate" className="mt-5 d-block mx-auto submit-form btn"/>
                </form>

                <div className="col">
                    <Contents/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;