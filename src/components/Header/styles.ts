import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    height: ${metrics.height * 0.085}px;
    background-color: ${colors.primary};
    flex-direction: row;
    align-items: center;
    padding-left: 5%;
`;

export const Button = styled.TouchableOpacity`
   
`;

export const Text = styled.Text`
    font-size: 26px;
    color: ${colors.white};
    margin-left: 10px;
`;

