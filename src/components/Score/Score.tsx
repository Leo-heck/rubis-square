import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties } from '@material-ui/styles';

import { CustomTheme } from '../../style/theme';

import anime from 'animejs';

type ClassNames = 'container';
interface OwnProps {
  value: number;
}

type Props = OwnProps;


export const Score: React.FC<Props> = (props: Props) => {
  const { value } = props;

return <div>Nombre de coups : <b>{value}</b></div>;
};

export default (Score);
