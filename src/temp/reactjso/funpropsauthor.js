import React from 'react';

const Andy = {
    author: {
        name: "Andy",
        imageUrl: "https://pmcdeadline2.files.wordpress.com/2019/03/andy-samberg-e1552341657472.jpg"
    },
    text: "Andy is singer."
}


const Kalita = {
    author: {
        name: "Kalita",
        imageUrl: "https://www.magicalassam.com/wp-content/uploads/2018/07/Himakshi-Kalita-10-336x420.jpg"
    },
    text: "Kalita is programming."
}


const Sorey = {
    author: {
        name: "Sorey",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPrOpdls7XLFJxz-cpXgtJ-q74fM3K1ogS9g&usqp=CAU"
    },
    text: "Sorey is farmer."
}

function Avatar(props) {
    return(
        <div>
            <img 
                src={props.author.imageUrl}
                alt={props.author.name}
                style={{ width:50, height:50}}
            />
        </div>
    )
}

function Comment(props) {
    return(
        <div>
            {props.text}
        </div>
    )
}

function Author(props) {
    return(
        <div>
            <div class="Avatar">
                <Avatar author={props.data.author}/>
            </div>
            
            <div class="Author--Name">
                {props.data.author.name}
            </div>
            <div class="Comment">
                <Comment text={props.data.text}/>
            </div>
            
        </div>
    )
}

function MainAuthorPage() {
    return(
        <div>
            <Author data={Andy}/><br />
            <Author data={Kalita}/><br />
            <Author data={Sorey}/><br />
        </div>
    )
}

export default MainAuthorPage;