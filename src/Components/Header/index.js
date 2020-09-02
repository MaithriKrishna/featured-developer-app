import React from 'react';
import { Link } from "react-router-dom";
import {
    TitleText,
    HeaderWrapper,
    Text,
    SubtitleText,
    Button,
    AddButton
} from "./style";

export const Header = () =>
    <HeaderWrapper>
        <div>
            <TitleText><Text>Featured </Text><Text dark>Developers</Text></TitleText>
            <SubtitleText>Prominent developers in Bangalore</SubtitleText>
        </div>
        <AddButton>
            <Link to="/new"><Button>+ ADD NEW DEVELOPER</Button></Link>
        </AddButton>
    </HeaderWrapper>