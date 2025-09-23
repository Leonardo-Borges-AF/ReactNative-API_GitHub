import styled from "styled-components";

export const Container = styled.main`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        flex-direction: row;
        align-items: center;
    }
`
export const Avatar = styled.img`
    align-self: center;
    width: 70%;
    margin-bottom: 1rem;
    border-radius: 50%;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        width:70px;
        height: 70px;
        margin-right: 1rem;
        margin-bottom: 0;
    }
`
export const Login = styled.h1`
    font-size: ${(props) => props.theme.fontSize.lg};
`
export const Name = styled.h2`
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: normal;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        display: none;
    }
`
export const Inner = styled.div`
    padding: 1rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        display: none;
    }
`
export const Data = styled.p`
    display: flex;
    align-items: center;
    line-height: 1.5;

    svg{
        margin-right: 10px;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        display: none;
    }
`