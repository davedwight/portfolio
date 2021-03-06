import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
// import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
// import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import OverUnder from "../../assets/overunder.png";
import Fitt from "../../assets/fitt_gif.gif";
import FamilyPromise from "../../assets/family_promise_screenshot.png";
import Cava from "../../assets/cava_screenshot.png";
import Portfolio from "../../assets/portfolio_screenshot.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
    ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
    svg {
        ${tw`w-6 h-6`}
    }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
    ${tw`mt-16`}
    .slick-track {
        ${tw`flex`}
    }
    .slick-slide {
        ${tw`h-auto flex justify-center mb-1`}
    }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl pl-2 sm:pl-0 relative focus:outline-none`;
const CardImage = styled.div((props) => [
    // `background-image: url("${props.imageSrc}");`,
    `background-image: url(${props.imageSrc});`,
    tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex items-start`;
const Title = tw.h5`text-2xl font-bold w-full`;

const RatingsInfo = styled.div`
    ${tw`flex items-center sm:ml-4 mt-2`}/* svg {
        ${tw`w-6 h-6 text-yellow-500 fill-current`}
    } */
`;
// const Rating = tw.span`ml-2 font-bold`;

const SocialLink = styled.a`
    ${tw`cursor-pointer inline-block text-gray-800 hover:text-gray-500 transition duration-300 mx-4`}
    svg {
        ${tw`w-6 h-6`}
    }
`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-wrap justify-start`;

const Badge = styled.img`
    ${tw`mr-1 mt-1`}
`;

const PrimaryButtonContainer = tw.a`mt-auto`;

const PrimaryButton = tw(
    PrimaryButtonBase
)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
    // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
    const [sliderRef, setSliderRef] = useState(null);
    const sliderSettings = {
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                },
            },

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    /* Change this according to your needs */
    const cards = [
        {
            imageSrc: OverUnder,
            title: "OVER / UNDER",
            description:
                "Fullstack web application for betting on stocks with friends",
            locationText: "Rome, Italy",
            pricingText: "USD 39/Day",
            rating: "4.8",
            githubLink: "https://github.com/davedwight/over-under-fe",
            liveLink: "http://overunder.online/",
            stack: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
                "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
                "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
                "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
                "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
                "https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white",
            ],
        },
        {
            imageSrc: Fitt,
            title: "Fitt",
            description:
                "A platform for personal trainers to manage virtual coaching sessions.",
            locationText: "Rome, Italy",
            pricingText: "USD 39/Day",
            rating: "4.8",
            githubLink: "https://github.com/davedwight/Fitt-FE",
            liveLink: "https://fitt.vercel.app/",
            stack: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
                "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
                "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
                "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
                "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
                "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
            ],
        },
        {
            imageSrc: FamilyPromise,
            title: "Family Promise Service Tracker",
            description:
                "An iPad first map application that enables detailed logging and analytics of services to the homeless at risk population in Spokane, WA.",
            locationText: "Ibiza, Spain",
            pricingText: "USD 50/Day",
            rating: 4.9,
            githubLink:
                "https://github.com/BloomTech-Labs/family-promise-service-tracker-be-a",
            liveLink: "https://family-promise-service-tracker.vercel.app/",
            stack: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
                "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
                "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
                "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
                "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
                "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
                "https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white",
                "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
            ],
        },
        {
            imageSrc: Cava,
            title: "CAVA Homes",
            description:
                "A landing page with an embedded Typeform for a renovation and construction business in San Luis Obispo, CA. Styled with no frameworks, just pure CSS, save one modal component from Material UI.",
            locationText: "Palo Alto, CA",
            pricingText: "USD 19/Day",
            rating: "5.0",
            githubLink: "https://github.com/davedwight/cava-homes",
            liveLink: "https://cava-homes.vercel.app/",
            stack: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
                "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
                "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
            ],
        },
        {
            imageSrc: Portfolio,
            title: "Portfolio",
            description:
                "This website. Built with Treact ??? a library of customizable TailwindCSS components.",
            locationText: "Arizona, RAK",
            pricingText: "USD 99/Day",
            rating: 4.5,
            githubLink: "https://github.com/davedwight/personal-site-treact",
            liveLink: "https://www.davedwight.com/",
            stack: [
                "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
                "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
            ],
        },
    ];

    return (
        <Container>
            <Content>
                <HeadingWithControl>
                    <Heading>Projects</Heading>
                    <Controls>
                        <PrevButton onClick={sliderRef?.slickPrev}>
                            <ChevronLeftIcon />
                        </PrevButton>
                        <NextButton onClick={sliderRef?.slickNext}>
                            <ChevronRightIcon />
                        </NextButton>
                    </Controls>
                </HeadingWithControl>
                <CardSlider ref={setSliderRef} {...sliderSettings}>
                    {cards.map((card, index) => (
                        <Card key={index}>
                            <CardImage imageSrc={card.imageSrc} />
                            <TextInfo>
                                <TitleReviewContainer>
                                    <Title>{card.title}</Title>
                                    <RatingsInfo>
                                        <SocialLink href={card.githubLink}>
                                            <GithubIcon />
                                        </SocialLink>
                                    </RatingsInfo>
                                </TitleReviewContainer>
                                <SecondaryInfoContainer>
                                    {card.stack.map((badge, index) => (
                                        <Badge key={index} src={badge} />
                                    ))}
                                </SecondaryInfoContainer>
                                <Description>{card.description}</Description>
                            </TextInfo>
                            <PrimaryButtonContainer
                                href={card.liveLink}
                                target="_blank"
                            >
                                <PrimaryButton>View Live Site</PrimaryButton>
                            </PrimaryButtonContainer>
                        </Card>
                    ))}
                </CardSlider>
            </Content>
        </Container>
    );
};
