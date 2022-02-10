import React from "react";
import WebConnect from "../../Resources/Images/WebConnect.png";
import MobileConnect from "../../Resources/Images/MobileConnect.png";

/*
<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>
*/

function Connect() {
    const getImageMap = () => {
        if (window.innerWidth > 660) {
            return (
                <section>
                    <img src={WebConnect} usemap="#image-map" />

                    <map name="image-map">
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.facebook.com/"
                            coords="106,90,69"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://web.whatsapp.com/"
                            coords="192,234,87"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://github.com/login"
                            coords="92,407,56"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://mail.google.com/mail/u/0/#inbox"
                            coords="305,81,399,157"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.linkedin.com/feed/"
                            coords="277,329,366,416"
                            shape="rect"
                        ></area>
                        <area
                            target=""
                            alt=""
                            title=""
                            href=""
                            coords="420,165,608,355"
                            shape="rect"
                        ></area>
                        <area
                            target=""
                            alt=""
                            title=""
                            href=""
                            coords="420,165,608,355"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://github.com/login"
                            coords="677,101,79"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://mail.google.com/mail/u/0/#inbox"
                            coords="652,332,804,449"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.facebook.com/"
                            coords="880,224,102"
                            shape="circle"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://www.linkedin.com/feed/"
                            coords="1030,39,1177,180"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href=""
                            coords="994,318,1130,449"
                            shape="rect"
                        ></area>
                        <area
                            target="_blank"
                            alt=""
                            title=""
                            href="https://web.whatsapp.com/"
                            coords="1231,278,64"
                            shape="circle"
                        ></area>
                    </map>
                </section>
            )
        }
        return (
            <section>
                <img src={MobileConnect} usemap="#image-map" />
                <map name="image-map">
                    <area target="_blank" alt="" title="" href="https://www.facebook.com/" coords="25,22,14" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://mail.google.com/mail/u/0/#inbox" coords="72,18,100,40" shape="rect"></area>
                    <area target="_blank" alt="" title="" href="https://web.whatsapp.com/" coords="48,56,18" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://github.com/login" coords="21,98,14" shape="circle"></area>
                    <area target="_blank" alt="" title="" href="https://www.linkedin.com/feed/" coords="69,82,90,101" shape="rect"></area>
                    <area target="_self" alt="" title="" href="" coords="241,78,276,109" shape="rect"></area>
                </map>
            </section>
        )
    }
    return (
        <div id="portfolio-connect-with-me">
            <h1>Connect with me</h1>
            <p>By clicking on the corresponding icon</p>
            {getImageMap()}
        </div>
    );
}

export default Connect;
