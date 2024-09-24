import "../SocialNetwork/SocialNetwork.scss";
import { ReactComponent as Facebook } from "../Access/img/Facebook.svg";
import { ReactComponent as Youtube } from "../Access/img/Yotube.svg";
const SocialNetwork = () => {

    return (
        <>
            <div className="Social">
                <>
                    <a href="https://www.facebook.com/ducmanh0206/?locale=vi_VN">
                        <Facebook className="facebook" />
                    </a>
                </>

                <>
                    <a href="https://www.facebook.com/ducmanh0206/?locale=vi_VN">
                        <Youtube className="youtube" />
                    </a>
                </>

                {/* <a href="https://www.facebook.com/ducmanh.2006.06">
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/channel/UCP4xx_DUx7d3_JQ1e769hNQ">
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/?lang=vi">
                    <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a> */}

            </div>
        </>
    )
}


export default SocialNetwork;