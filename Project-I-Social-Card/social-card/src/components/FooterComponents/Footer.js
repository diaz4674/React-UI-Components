import React from 'react';
import "./Footer.css";

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>


const commentClicked = () => {
    alert('You clicked me!')
}

const reTweet = () => {
    alert('You Re-tweeted this!')
}

const heart = () => {
    alert('You liked this!')
}


const Footer = () => {
    return (        <div className='icons'> 

            <i class="far fa-comment" onClick = {commentClicked} ></i>
            <i class="fas fa-sync-alt reTweet" onClick = {reTweet} > 6 </i>
            <i class="far fa-heart heart" onClick = {heart}> 4 </i>
            <a class="mailto" href="mailto:contact@test.com"> <i class="far fa-envelope email" /></a>
        </div>
    );
}
export default Footer;