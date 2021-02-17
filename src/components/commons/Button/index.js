import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../foundation/Text'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToSyle';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background-color: transparent;
`;

const ButtonDefault = css`
    background: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
        padding: 12px 43px;
        ${TextStyleVariantsMap.paragraph1}
        `,
})}

    ${propToStyle('margin')}
    ${propToStyle('display')}

    ${TextStyleVariantsMap.smallestException}
    ${function (props) {
        return props.ghost ? ButtonGhost : ButtonDefault;
    }}
    &:hover,
    &:focus{
        opacity: .5;
    }
`;