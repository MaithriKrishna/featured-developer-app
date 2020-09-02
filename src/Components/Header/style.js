import styled from "styled-components";

export const TitleText = styled.h1`
    margin: 15px 15px 5px;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    a{
        text-decoration: none;
    }
    @media (max-width: 400px) {
        display: block;
    }
`;

export const Text = styled.span`
    color: ${(props) => props.dark ? 'black' : 'grey'}
`;

export const SubtitleText = styled.h2`
    color: grey;
    margin: 5px 15px 5px;
`;

export const Button = styled.div`
    padding: 10px 20px;
    border-radius: 30px;
    background: linear-gradient(to right, #4d86e0 , #6760e2);
    color: white;
`;

export const AddButton = styled.div`
    padding-top: 45px;
    padding-left: 100px;
    @media (max-width: 400px) {
        padding: 0 10px;
    }
    @media (max-width: 768px) {
        padding: 45px 10px 0 0;
        width: 240px;     
    }
`;