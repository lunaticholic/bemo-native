import styled from "styled-components/native";

// textf를 입력하는 칸을 위한 css
export const TextInput = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px 7px;
    border-radius: 4px;
    color: white;
    margin-bottom: ${(props) => (props.lastOne ? "15" : 8)}px;
`;