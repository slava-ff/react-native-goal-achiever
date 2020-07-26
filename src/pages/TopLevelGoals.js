import React, {useState} from 'react';

import GoalFlatList from '../components/GoalFlatList';
import AddButton from '../components/AddButton';
import DB from '../helpers/db.helper';

const TopLevelGoals = ({navigation}) => {
  const [goals, setGoals] = useState([]);

  const getAllGoalsFromDb = async () => {
    const goalsFromDb = await DB.getAll();

    setGoals(goalsFromDb);

    return goalsFromDb;
  };

  getAllGoalsFromDb();

  return (
    <>
      {goals && <GoalFlatList goalsTemp={goals} navigation={navigation} />}
      <AddButton navigation={navigation} />
    </>
  );
};

export default TopLevelGoals;
