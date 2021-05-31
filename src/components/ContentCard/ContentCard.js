import React, { useState } from 'react';
import './ContentCard.css'
import copy from '../../images/ic_content_copy_24px.png';
import edit from '../../images/ic_edit_24px.png';
import search from '../../images/Group 94.png';
import deleted from '../../images/ic_delete_-1.png';
import bookmark from '../../images/ic_collections_bookmark_-1.png';


const ContentCard = () => {
    const [charCount, setCharCount] = useState(250);

    const handleChar = (e) => {
        setCharCount(e.target.value)
    }

    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label class="form-check-label" for="flexCheckChecked">
                <div className="card-container">
                    <div className="typography">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem corporis sunt odio fugit nesciunt sapiente nobis et voluptates porro hic placeat dolorem sed facilis veritatis error, sit nemo eligendi tempora vero? Animi voluptas quod tenetur.</p>

                        <div className="d-flex">
                            <select onChange={handleChar} name="" id="" className="form-control w-50 mr-2">
                                <option value="Characters" >Characters</option>
                                <option value="250" >250</option>
                                <option value="300" >300</option>
                                <option value="350" >350</option>
                            </select>
                            <span className="counter">{charCount}</span>
                        </div>
                    </div>

                    <hr />

                    <div className="card-icons d-flex justify-content-between">
                        <div className="leftIcon">
                            <img src={copy} alt="copy" />
                            <img src={edit} alt="edit" />
                            <img src={search} alt="search" />
                            <img src={deleted} alt="deleted" />
                        </div>
                        <div className="rightIcon">
                            <img src={bookmark} alt="bookmark" />
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default ContentCard;