import React from 'react';

const andy = {
    name:"Andy", 
    imageUrl:"http://abc.com/a/image01.jpg"
};

const Kalita = {
    name: "Kalita",
    age: "27",
    text: "kalita is programmer"
}

const Sorey = {
    author: {
        name: "Sorey",
        imageUrl: "http://potuke.com/b/image00.jpg"
    },
    text: "This is singer"
}


function AuthorInfo(props) {
    return(
        <div>
            <div class="Author--Avatar"
            >
                {props.author.imageUrl}
                {props.author.name}
            </div>
            
            <div class="Author--Info">
                {props.author.name}
                {props.text}
            </div>
        </div>
    )
}

function Author(props) {
    return(
        <div>
            {props.name}
            ---
            {props.age}
        </div>
    )
}

function CommentView(props) {
    return(
        <div>
            {props.codata}
        </div>
    )
}

function AuthorPage2(props) {
    return(
        <div>
            <Author name={props.name} age={props.age}/>
            <CommentView codata={props.text} />
        </div>
    )
}

function Avatar(props) {
    return(
        <div>
            {props.author.imageUrl}
            {props.author.name}
        </div>
    )
}

function More(props) {
    return(
        <div>
            {props.text}
        </div>
    )
}

function Author3(props) {
    return(
        <div>
            <Avatar author={props.info.author}/>
            <More text={props.info.text}/>
        </div>
    )
}

function MainAuthorPage() {
    return(
        <div>
            <AuthorInfo author={andy} text="abc" /> <br />
            <AuthorPage2 name={Kalita.name} age={Kalita.age} text={Kalita.text} /> <br />
            <Author3 info={Sorey} />
        </div>
    )
}

export default MainAuthorPage;