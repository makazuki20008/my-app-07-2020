import React from 'react';
import './twitter.css';

// get our fontawesome imports
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import { faArchway } from "@fortawesome/free-solid-svg-icons";
   
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Twitter() {
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm frs-col">
                        <ul class="tinv">
                            <li class="tn-home"><FontAwesomeIcon icon={faDoorOpen} />Home</li>
                            <li class="tn-exl"><FontAwesomeIcon icon={faDotCircle} />Explore</li>
                            <li class="tn-noti"><FontAwesomeIcon icon={faSpa} />Notifications</li>
                            <li class="tn-mes"><FontAwesomeIcon icon={faThList} />Messages</li>
                            <li class="tn-boks"><FontAwesomeIcon icon={faIdBadge} />Bookmarks</li>
                            <li class="tn-lst"><FontAwesomeIcon icon={faAirFreshener} />Lists</li>
                            <li class="tn-rol"><FontAwesomeIcon icon={faArchive} />Profile</li>
                            <li class="tn-bge"><FontAwesomeIcon icon={faArchway} />More</li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        
                    </div>
                    <div class="col-sm">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twitter;