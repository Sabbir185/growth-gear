import React from 'react';
import './Contents.css';
import collection from '../../images/ic_collections_bookmark_24px@2x.png';
import deleted from '../../images/ic_delete_24px@2x.png';
import fileShare from '../../images/ic_share_24px@2x.png';
import download from '../../images/ic_file_download_24px@2x.png';
import ContentCard from '../ContentCard/ContentCard';

const Contents = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


    return (
        <div className="content-container">
            
            <div className="d-flex justify-content-between mt-3">
                <div className="form-check">
                    <label className="form-check-label" for="flexCheckDefault">
                        Select All
                </label>
                    <input className="form-check-input ml-3" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <div className="logo-container mr-3">
                    <img src={collection} alt="collection" />
                    <img src={deleted} alt="deleted" />
                    <img src={fileShare} alt="fileShare" />
                    <img src={download} alt="download" />
                </div>
            </div>

            <hr />

            <div>
                {
                    numbers.map(card => <ContentCard />)
                }
            </div>

        </div>
    );
};

export default Contents;