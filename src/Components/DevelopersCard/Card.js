import React from "react";
import { Link } from "react-router-dom";
import {
    CardWrapper,
    EditDeleteContent,
    Button,
    ImageContainer,
    HeaderWrapper,
    Logo,
    DeveloperDetails,
    DeveloperTitle,
    ProjectDetails,
    Description,
    ImageLink,
    Image,
    OverlayContent
} from "./style";

const Header = ({ logo, title, totalExp, totalProjects }) =>
    <HeaderWrapper>
        <Logo style={{ backgroundImage: `url(${logo})` }} />
        <DeveloperDetails>
            <DeveloperTitle>
                {title}
            </DeveloperTitle>
            <ProjectDetails>
                {totalExp ?
                    <div>
                        <div className="bold">{totalExp}</div>
                        <div>Years Exp.</div>
                    </div> : null}
                {totalProjects ?
                    <div>
                        <div className="bold">{totalProjects}</div>
                        <div>Projects</div>
                    </div> : null}
            </ProjectDetails>
        </DeveloperDetails>
    </HeaderWrapper>

export const Card = ({ desc, imgURL, imgTitle, logo, title, totalExp, totalProjects, location, id, deleteDevelopersData }) => {
    return (
        <CardWrapper>
            <Header logo={logo} title={title} totalExp={totalExp} totalProjects={totalProjects} />
            <Description>{desc}</Description>
            <ImageLink><a href={imgURL}>{imgTitle}</a></ImageLink>
            <ImageContainer>
                <Image style={{ backgroundImage: `url(${imgURL})` }} />
                <OverlayContent><div className="bold">{imgTitle}</div><div>{location}</div></OverlayContent>
            </ImageContainer>
            <div className="overlay" >
                <EditDeleteContent>
                    <Link to={`/${id}`}><Button>Edit</Button></Link>
                    <Button onClick={() => deleteDevelopersData(id)}>Delete</Button>
                </EditDeleteContent>
            </div>
        </CardWrapper>
    );
};