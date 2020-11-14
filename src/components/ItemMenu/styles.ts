import styled, { css } from 'styled-components/native';
import { colors, metrics } from '../../styles';

interface TextProps {
    isSelected?: boolean;
};

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-left: 10%;
    height: ${metrics.height * 0.07}px;
`;

export const Text = styled.Text<TextProps>`
    font-size: 22px;
    color: ${colors.white};
    padding-left: 20px;

    ${({ isSelected }) => isSelected && css`
        color: ${colors.textSelect};
    `}
`;
