import * as React from 'react';

export class PShowCat extends React.Component {
  public render(): JSX.Element {

    return (
      <div>
          <div id="lbar">
            *iconMenuMoreDown
            <ul>
                <li>*fder Seattle</li>
                <li>*fder Spokane</li>
                <li>*fder Portland</li>
                <li>*fder San Francisco</li>
                <li>*fder Los Angeles</li>
                <li>*fder San Diego</li>
                <li>*fder New York</li>
                <li>*fder Washington D.C</li>
            </ul>
          </div>
          
        <div id="rbar">
              <div id="top">
                <input id="search">input *iconSearch</input>
                <input id="date" type="datetime"/>
              </div>

            <div>
                <h2>San Francisco</h2>
                <div id="image"></div>
                <p>Subtitle</p>
                <p>I'm a thing. But, like mót politicians, he
                promised mỏe than he could deliver. You won't 
                have time for sleeping, soldier, not with all the 
                bed making you'll be doing. Then we'll go with 
                that data file! Hey, you add a one and two 
                zeros to that or we walk! You're going to do his 
                laundry? I've got to find a way to escape        
                </p>
            </div>

            <div>
                <h2>Activities</h2>
                <div id="img1"></div>
                <div id="img2"></div>
                <div id="img3"></div>
            </div>
          </div>

      </div>
    );
  }
}

export default PShowCat;