import React, { ReactElement, useMemo } from 'react';

import { ArtType } from '../../@types/art';
import { getArtInfo } from '../../utils/art';

import { StyledTitle, StyledName, StyledContainer, StyledColors, StyledColor } from './styles';

export default function ArtPreview({ name, itemWidth, items, marginBetween, id }: ArtType): ReactElement {
  const art = useMemo(() => ({ name, itemWidth, items, marginBetween, id }), [name, itemWidth, items, marginBetween, id]);
  const artInfo = useMemo(() => getArtInfo(art), [art]);

  return (
    <StyledContainer>
      <StyledTitle>
        <StyledName>{name}</StyledName>
      </StyledTitle>
      <StyledColors>
        {Object.entries(artInfo?.colors ?? {}).map(([color, colorAmount]) => (
          <StyledColor color={color} key={`${color}-${colorAmount}`}>
            {colorAmount}
          </StyledColor>
        ))}
      </StyledColors>
    </StyledContainer>
  );
}
