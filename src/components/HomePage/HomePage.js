import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import PerCentLanguage from "../PerCentLanguage/PerCentLanguage";
import "../HomePage/HomePage.scss";
import Education from "../Education/Education";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
const HomePage = () => {
    return (
        <React.Fragment>
            <div className="homeWrapper">
                <div className="avtW">
                    <div className="avatar"></div>
                </div>
                <>
                    <ContentTitle
                        title={"Describe me"}
                    />
                    <p className="description">
                        Xin chào các bạn, đây là trang cá nhân về tôi được phát triển bởi tôi
                        và đẩy lên trên nền tảng github.
                        Tôi có mong muốn trở thành một best developer, biết ứng dụng các công nghệ
                        hiện có để tạo ra các ứng dụng, phục vụ giải quyết mọi vấn đề cho con người
                        trong cuộc sống.

                    </p>
                </>


                <>
                    <ContentTitle
                        title={"Skill"}
                    />

                    <div className="SkillWrapper">
                        <PerCentLanguage
                            lang={"HTML"}
                            percent={"80%"}
                            colorPercent={"#dc0000"}
                        />
                        <PerCentLanguage
                            lang={"CSS"}
                            percent={"62%"}
                            colorPercent={"#0058dc"}
                        />

                        <PerCentLanguage
                            lang={"JS"}
                            percent={"70%"}
                            colorPercent={"#e8d610"}
                        />
                        <PerCentLanguage
                            lang={"REACTJS"}
                            percent={"20%"}
                            colorPercent={"#10b2e8"}
                        />
                    </div>





                </>

                <>
                    <ContentTitle
                        title={"Education"}
                    />

                    <Education />
                </>


                <>
                    <ContentTitle
                        title={"Social Network"}
                    />

                    <SocialNetwork />
                </>







            </div>


        </React.Fragment>

    )
}

export default HomePage; 