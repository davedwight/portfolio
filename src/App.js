import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Hero from "components/hero/TwoColumnWithVideo.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Resume from "./components/resume";
// import BlogIndexPage from "pages/BlogIndex.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    // If you want to disable the animation just use the disabled `prop` like below on your page's component
    // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

    return (
        <Router>
            <Switch>
                {/* <Route path="/blog">
                    <BlogIndexPage />
                </Route> */}
                <Route path="/resume">
                    <Resume />
                </Route>
                <Route path="/">
                    <AnimationRevealPage>
                        <Hero />
                        <SliderCard />
                        <Footer />
                    </AnimationRevealPage>
                </Route>
            </Switch>
        </Router>
    );
}
