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
                    <a href="">
                        <Youtube className="youtube" />
                    </a>
                </>





            </div>
        </>
    )
}


export default SocialNetwork;