import styled from "styled-components";

const Janela = styled.div`
    background-color: #fff;
    margin: 32px 0;
    overflow: hidden;
    padding: 32px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    `;

export default function Janela(props) {
    return (
        <Janela>
            {props.children}
        </Janela>
    );
}