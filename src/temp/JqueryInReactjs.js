import React from 'react';
import $ from 'jquery';
import "./JqueryInReactjsScript"; // Trường hợp script local

class JqueryInReactjs extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount () {
          
        // Trường hợp script online
        //const script = document.createElement("script");

        //script.src = "https://... .com";
        //script.async = true;

        //document.body.appendChild(script);

        document.getElementById("ja").style.width = '200px';
        document.getElementById("ja").style.height = '200px';
        document.getElementById("ja").style.backgroundColor = "red";

        document.getElementById("ja").addEventListener('click', ()=>{console.log("js click")});

        $("#ja").css('background-color','green');
        $("#ja").click(()=>{console.log("jquery click")});

        $("#ja").click(function(){
            var ja = $("#ja");
            ja.animate({height: '300px', opacity: '0.4'}, "slow");
            ja.animate({width: '300px', opacity: '0.8'}, "slow");
            ja.animate({height: '100px', opacity: '0.4'}, "slow");
            ja.animate({width: '100px', opacity: '0.8'}, "slow");
          });  
		
		function slideHide() {
			img.first().hide;
		}
		
		function slideShow() {
			img.next().show;
		}
		
		$("#next").click(slideHide);
		$("#next").click(slideShow);

    }
    render() {
        return(
            <div>
                <div id="ja"></div>
				
				<div id="jquery-slide">
					<span id="back"><</span>
					<span id="next">></span>
					{/*auto general*/}
						<img class="slide" src="https://cdn.bongdaplus.vn/Assets/Media/2018/02/01/56/bui-tien-dung-1.jpg"/>
						<img class="slide" src="https://sohanews.sohacdn.com/thumb_w/660/2019/photo1559182883058-1559182883704-crop-1559182937659654935167.jpg"/>
						<img class="slide" src="https://baodansinh.mediacdn.vn/2019/12/30/va-1577670930380-15776709303872011433781.jpg"/>
						<img class="slide" src="https://img4.thuthuatphanmem.vn/uploads/2019/10/30/hinh-anh-hoa-phuong-dep-nhat_105433612.jpg"/>
						<img class="slide" src="https://image.plo.vn/w653/Uploaded/2020/wpdhnwcjw/2020_08_13/trom-xe-bi-hinh-su-bat_auwc.jpg"/>
						<img class="slide" src="https://techzones.vn/Data/Sites/1/News/2375/techzones-cau-hinh-cua-chiec-laptop-chien-ngot-pubg.jpg"/>
						<img class="slide" src="https://i.pinimg.com/originals/11/5a/4e/115a4e7741decb9386c84ead3cca7fdb.jpg"/>
						
						
					<div class="button">
					{/*auto general*/}
						<button></button><button></button><button></button><button></button><button></button><button></button><button></button>
					</div>
				</div>
				
            </div>
        )
    }
}

export default JqueryInReactjs;