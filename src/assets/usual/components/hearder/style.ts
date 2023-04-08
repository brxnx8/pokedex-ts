import styled from "styled-components";
import wallpaper from "../../../images/wallpaperHeader.jpg"

export const ConteinerHeader = styled.header`
    background-image: url(${wallpaper});
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 20px;

    font-size: 35px;

    h1 {
        color: #cd0000;
    }

    && > nav {
        display: flex;
        gap: 10px;

        font-size: 25px;
    }
    .active{
        color: #ffffff;
        border-bottom: 1px solid white;
    }
`
