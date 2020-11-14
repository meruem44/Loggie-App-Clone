import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    margin-top: ${metrics.marginStatus}px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    padding: 20px 15px;
    height: 20%;
`;

export const ContentTitle = styled.View`
    
`;

export const Description = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    text-align: center; 
`;

export const Name = styled.Text`
    color: ${colors.white};
    font-size: 20px;
    text-align: center; 
`;

export const Content = styled.View`
  height: 60%;
`;

export const Footer = styled.View`
  height: 20%;
  justify-content: flex-end;
`;

export const ContentFooter = styled.View`
      height: ${metrics.height * 0.1}px;
      background-color: ${colors.secundary};
      justify-content: center;
      align-items: center;
`;

export const TextContentFooter = styled.Text`
    color: ${colors.white};
    font-size: 16px;
    text-align: center; 
`;

