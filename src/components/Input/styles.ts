import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    position: absolute;
    top: 12%;
    width:${metrics.width * 0.9}px;
    height: ${metrics.height * 0.08}px;
    background-color: ${colors.white};
    align-self: center;
    z-index: 99999999999;
    flex-direction: row;
    border-width: 0.7px;
    border-color: #eeeeee;
    align-items: center;
    padding: 0 15px;
`;

export const TextInput = styled.TextInput`
    font-size: 20px;
    flex: 1;
    margin-left: 10px;
`;
