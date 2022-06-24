import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../../App.css';
function Footer(){
    return(
        //footer section 
        <footer className="bg-white">
            <p>© 2022 Dugsiiye Online Courses. All rights reserved.</p>
            <ul className="d-flex">
                <li><a><FacebookIcon /></a></li>
                <li><a><InstagramIcon /></a></li>
                <li><a><TwitterIcon /></a></li>
                <li><a><GitHubIcon /></a></li>
                <li><a><YouTubeIcon /></a></li>
            </ul>
        </footer>
    );
}
export default Footer;