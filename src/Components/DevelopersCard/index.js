import React from "react";
import { Card } from "./Card";
import styled from "styled-components";

const DeveloperCardsWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
`;

export const DeveloperCardsView = ({ developersData = [], deleteDevelopersData }) =>
    developersData.length ?
        <DeveloperCardsWrapper>
            {developersData.map(cardData =>
                <Card {...cardData} deleteDevelopersData={deleteDevelopersData} />
            )}
        </DeveloperCardsWrapper> : null;