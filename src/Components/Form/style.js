import styled, { css } from "styled-components";

export const Text = styled.span`
    color: ${(props) => props.dark ? 'black' : 'grey'}
`;

export const InputField = styled.input`
    border-radius: 20px;
    padding: 8px;
    border-width: 1px;
    border-color: #cacaca;
    background-color: #eaeaea;
    border-style: solid;
    width: 350px;
    padding: 10px 20px;
    color: #707070;
    :focus{
        outline: -webkit-focus-ring-color auto 0;
    }
`;

export const Label = styled.div`
    padding: 15px 0 5px 20px;
    color: #707070;
`

export const Submit = styled.input`
        border-radius: 20px;
        padding: 8px;
        border-width: 0;
        background-color: grey;
        color: black;
        border-style: solid;
        width: 393px;
        padding: 10px 20px;
        margin: 30px 0;
        height: 42px;
        font-size: 20px;
        pointer-events: none;
        ${props => props.formChanged && css`
            background: linear-gradient(to right, #4d86e0 , #6760e2);
            color: white;
            cursor: pointer;
            pointer-events: unset;
        `}
`;

export const DeveloperForm = styled.div`
    margin: auto;
    width: 30%;
`;