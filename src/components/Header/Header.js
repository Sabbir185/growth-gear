import React from 'react';
import './Header.css'
import leftArrow from '../../images/left.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="header">
            <div className="row">

                <div className="col">
                    <div className="row con1">
                        <div className="col leftArrow pr-0">
                            <Link><img src={leftArrow} alt="" /></Link>
                        </div>
                        <div className="col-9 save-exit">
                            <p className="exit">Save & Exit <br />
                                <span>All changes saved at 21:13pm</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <p className="untitled"><span>untitled-1</span></p>
                </div>

                <div className="col amazon-product">
                    <p><span>Amazon Product Description</span></p>
                </div>
            </div>
        </section>
    );
};

export default Header;