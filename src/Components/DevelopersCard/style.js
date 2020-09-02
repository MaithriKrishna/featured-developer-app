import styled from "styled-components";

export const CardWrapper = styled.div`
    padding: 20px;
    margin: 20px;
    width: calc(25% - 85px);
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    border-top: 4px solid #5d27d9;
    color: #707070;
    position: relative;
    .overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: black;
        z-index: 3;
    }
    &:hover{
        .overlay{
            opacity: 0.7;
        }
    }
    @media (max-width: 768px) {
        width: calc(50% - 85px);
    }

    @media (max-width: 400px) {
        width: calc(100% - 85px);
    }
`;

export const EditDeleteContent = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;
`;

export const Button = styled.div`
    padding: 5px;
    border-radius: 25px;
    width: 100px;
    background: white;
    color: black;
    margin-bottom: 10px;
    cursor: pointer;
`;

export const ImageContainer = styled.div`
    position: relative;
    background-color: black;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

export const Logo = styled.div`
    width: 100px;
    height: 80px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid #e1e1e1;
`;

export const DeveloperDetails = styled.div`
    margin-left: 20px;
`;
export const DeveloperTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: black;
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
`;

export const ProjectDetails = styled.div`
    display: flex;
    justify-content: space-between;
    .bold{
        font-weight: bold;
        color: black;
    }
`;

export const Description = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 30px;
    height: 55px;
`;

export const ImageLink = styled.div`
    padding-bottom: 10px;
    a{
        color: #6e4fb8;
        font-weight: bold;
    }
`;

export const Image = styled.div`
    width: 100%;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    border-radius: 4px;
    opacity: 0.8;
`;

export const OverlayContent = styled.div`
    position: absolute;
    top: 65%;
    left: 5%;
    width: 100%;
    height: auto;
    z-index: 1;
    color: white;
    font-size: 15px;
    .bold{
        font-weight: bold;
    }
`;