import PouchDB from 'pouchdb-react-native';
const db = new PouchDB('mydb');

const errorHelper = (text, err) => {
  if (err) {
    console.error(`error in ${text}: `, err);
  } else {
    console.error(`error in ${text}.`);
  }

  return;
};

const deleteChildrenGoalsAndThenItself = goal => {
  const {childrenGoalsIds} = goal.needsDescription;

  // find and delete children goals
  if (childrenGoalsIds) {
    childrenGoalsIds.forEach(goalId => {
      const childGoal = db.find({_id: goalId}, function(err, doc) {
        if (err) {
          return errorHelper(
            'db.delete.deleteChildrenGoals.childrenGoalsIds',
            err,
          );
        }

        return doc;
      });

      if (!childGoal) {
        return errorHelper(
          'db.delete.deleteChildrenGoals.childrenGoalsIds.!childGoal',
        );
      }

      deleteChildrenGoalsAndThenItself(childGoal);
    });
  }
  // delete itself
  const numberRemoved = db.remove({_id: goal._id}, {}, function(
    err,
    numRemoved,
  ) {
    if (err) {
      return errorHelper('db.delete.deleteChildrenGoals.remove', err);
    }

    return numRemoved;
  });

  if (numberRemoved !== 1) {
    return errorHelper('db.delete.deleteChildrenGoals.numberRemoved!==1');
  }
};

export default {
  async getAll() {
    const allDocs = await db.allDocs();
    return allDocs.rows.map(doc => doc.doc);
  },

  async saveGoal(goal) {
    // return db.insert(goal, function(err, newDoc) {
    //   if (err) {
    //     return errorHelper('db.saveTopGoal', err);
    //   }
    //   return newDoc;
    // });

    return await db.post(goal);

    // if (!goal.parentGoalId) {
    //   console.log('===>>: DB 2-1');
    //   return newGoal;
    // } else {
    //   console.log('===>>: DB 2-2');
    //   const updatedGoal = await db.updateAsync(
    //     {_id: goal.parentGoalId},
    //     {$push: {'needsDescription.childrenGoalsIds': newGoal._id}},
    //     {},
    //   );

    //   if (updatedGoal) {
    //     return newGoal;
    //   } else {
    //     return errorHelper('db.saveNestedGoal.return');
    //   }
    // }
  },

  // saveNestedGoal(goal) {
  //   const newGoal = db.insert(goal, function(err, newDoc) {
  //     if (err) {
  //       return errorHelper('db.saveNestedGoal.insert', err);
  //     }

  //     return newDoc;
  //   });

  //   const updatedGoal = db.update(
  //     {_id: goal.parentGoalId},
  //     {$push: {'needsDescription.childrenGoalsIds': newGoal._id}},
  //     {},
  //     function(err, doc) {
  //       if (err) {
  //         return errorHelper('db.saveNestedGoal.update', err);
  //       }

  //       return doc;
  //     },
  //   );

  //   if (updatedGoal) {
  //     return newGoal;
  //   } else {
  //     return errorHelper('db.saveNestedGoal.return');
  //   }
  // },

  getById(id) {
    return db.find({_id: id}, function(err, doc) {
      if (err) {
        return errorHelper('in db.getById', err);
      }

      return doc;
    });
  },

  async getAllTopLevel() {
    return await db.findAsync({parentGoalId: ''});
  },

  async getAllLowLevel() {
    return await db.findfindAsync({'needsDescription.childrenGoalsIds': []});
  },

  update(goal) {
    const goalWithouId = {...goal};
    delete goalWithouId._id;

    return db.update({_id: goal._id}, {...goalWithouId}, {}, function(
      err,
      doc,
    ) {
      if (err) {
        return errorHelper('db.update', err);
      }

      return doc;
    });
  },

  async delete(goal) {
    return await db.remove(goal);
    // // delete from parent goal
    // if (goal.parentGoalId) {
    //   const updatedParentGoal = db.update(
    //     {_id: goal.parentGoalId},
    //     {$pull: {'needsDescription.childrenGoalsIds': goal._id}},
    //     {},
    //     function(err, doc) {
    //       if (err) {
    //         return errorHelper('db.delete.updatedParentGoal', err);
    //       }

    //       return doc;
    //     },
    //   );

    //   if (!updatedParentGoal) {
    //     return errorHelper('db.delete.!updatedParentGoal');
    //   }
    // }

    // // delete all its children goals and their children goals and etc... and then itself
    // return deleteChildrenGoalsAndThenItself(goal);
  },

  async deleteAll() {
    return await db.removeAsync({}, {multi: true});
  },

  getNewSchema() {
    const schema = {
      goalName: '',
      isDone: false,
      parentGoalId: '',
      logo: '',
      date: '',
      color: 'darkgrey',
      whatDescription: '',
      whyDescription: '',
      needsDescription: {
        simpleNeeds: [],
        childrenGoalsIds: [],
      },
      actionsDescription: [],
    };

    return {...schema};
  },
};
