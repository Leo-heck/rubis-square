import React from 'react';

interface OwnProps {
  value: number;
}

type Props = OwnProps;

export const Score: React.FC<Props> = (props: Props) => {
  const { value } = props;

  return (
    <div>
      Score : <b>{value}</b>
    </div>
  );
};

export default Score;
