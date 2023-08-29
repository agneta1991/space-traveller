import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, selectMissionsStatus } from '../redux/missions/missionsSlice';
import MissionsTableComponent from './MissionsTableComponent';
import './MissionsTable.css';

function MissionsTable() {
  const dispatch = useDispatch();
  const missionsStatus = useSelector(selectMissionsStatus);

  useEffect(() => {
    if (missionsStatus === 'idle') {
      dispatch(getMissions());
    }
  }, [dispatch, missionsStatus]);

  if (missionsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (missionsStatus === 'failed') {
    return <div>Error loading missions data.</div>;
  }

  return (
    <div>
      <MissionsTableComponent />
    </div>
  );
}

export default MissionsTable;
