import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Style } from 'jss';
import { CSSProperties } from '@material-ui/styles';
import { Tile } from '../Tile';
import { Score } from '../Score';

import { CustomTheme, getGridDisplay } from '../../style/theme';
import { GameDefinition, BoardLine, getGameLength } from '../../services/game-service';

type ClassNames = 'container';
interface OwnProps {
  classes: Record<ClassNames, string>;
}

export interface StateProps {
  game?: GameDefinition;
}

export interface DispatchProps {
  click: (x: number, y: number) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

export let GameComponent: React.FC<Props> = (props: Props) => {
  // const { classes, count, game, click } = props;

  const handleClick = (x: number, y: number) => () => {props.click(x, y)};
  
  return (
    <div>
      <div className={props.classes.container}>
        {props.game &&
          props.game.board.map((boardLine: BoardLine, y: number) =>
            boardLine.map((value: number, x: number) => (
              <Tile value={value} onClick={handleClick(x, y)} key={`${value}${x}${y}`} />
            )),
          )}
      </div>
      <Score value={props.game ? props.game.count : 0}/>
    </div>
  );
};

const styles: Style = (theme: CustomTheme): Record<ClassNames, ((p: Props) => CSSProperties) | CSSProperties> => ({
  container: (props: Props) => ({
    display: 'grid',
    gridTemplateColumns: props.game ? getGridDisplay(props.game) : '',
    width: props.game ? theme.custom.size.tile * (getGameLength(props.game) + 1) : 'unset',
    height: props.game ? theme.custom.size.tile * (getGameLength(props.game) + 1) : 'unset',
  }),
});

export default withStyles(styles)(GameComponent);
