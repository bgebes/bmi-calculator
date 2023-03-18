import React from 'react';
import styled from 'styled-components';
import TableView from '../TableView';
import variablesBreakpoints from '../../helpers/variablesBreakpoints';
import columns from '../../helpers/tableColumns';
import { getEntries } from '../../actions/actions';

const StyledContent = styled.main`
  min-height: calc(100vh - 69px);
  padding-top: 20px;
`;

const StyledContentCard = styled.div`
  background-color: ${variablesBreakpoints.insteadOfWhite};
  padding: 20px 20px;
  border-radius: 10px;
`;

function HistoryContent() {
  const data = getEntries();

  return (
    <StyledContent>
      <StyledContentCard>
        <TableView {...{ columns, data }} />
      </StyledContentCard>
    </StyledContent>
  );
}

export default HistoryContent;
