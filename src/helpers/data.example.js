const goal = {
  id: 'string || number',
  goalName: 'string',
  isDone: 'boolean',
  goalLevel: 'number',
  parentGoalId: 'string(id)',
  logo: 'string(path || name)',
  date: 'date',
  color: 'string(color name)',
  whatDescription: 'string with br',
  whyDescription: 'string with br',
  //   haveDescription: ['subGoal-1', 'subGoal-2'], // use needsDescription
  needsDescription: {
    simpleNeeds: [{doHave: 'boolean', needDescription: 'string'}],
    childrenGoalsIds: ['string || number'],
  },
  actionsDescription: [
    {
      isDone: 'boolean',
      actionDescription: 'string',
    },
    {
      isDone: 'boolean',
      actionDescription: 'string',
    },
  ],
};

const goalsTemp = {
  1: {
    id: 1,
    goalName: 'Some wish 1',
    isDone: false,
    parentGoalId: '',
    logo: 'cat_1.png',
    date: '2020-08-25T00:00:00',
    color: 'cornflowerblue',
    whatDescription:
      'Test what test what test what test what test what test what test what',
    whyDescription:
      'Test why test why test why test why test why test why test why test why',
    needsDescription: {
      simpleNeeds: [
        {doHave: true, needDescription: 'Test need 1'},
        {doHave: false, needDescription: 'Test need 2'},
      ],
      childrenGoalsIds: [],
    },
    actionsDescription: [
      {
        isDone: false,
        actionDescription: 'Test action 1',
      },
      {
        isDone: true,
        actionDescription: 'Test action 2',
      },
    ],
  },
  2: {
    id: 2,
    goalName: 'Some wish 2',
    isDone: false,
    parentGoalId: '',
    logo: 'cat_2.png',
    date: '2020-12-17T00:00:00',
    color: 'aquamarine',
    whatDescription:
      'Test what test what test what test what test what test what test what',
    whyDescription:
      'Test why test why test why test why test why test why test why test why',
    needsDescription: {
      simpleNeeds: [
        {doHave: true, needDescription: 'Test need 1'},
        {doHave: false, needDescription: 'Test need 2'},
      ],
      childrenGoalsIds: [],
    },
    actionsDescription: [
      {
        isDone: false,
        actionDescription: 'Test action 1',
      },
      {
        isDone: true,
        actionDescription: 'Test action 2',
      },
    ],
  },
  3: {
    id: 3,
    goalName: 'Some wish 3',
    isDone: false,
    parentGoalId: '',
    logo: 'cat_3.png',
    date: '2020-09-04T00:00:00',
    color: 'lightcoral',
    whatDescription:
      'Test what test what test what test what test what test what test what',
    whyDescription:
      'Test why test why test why test why test why test why test why test why',
    needsDescription: {
      simpleNeeds: [
        {doHave: true, needDescription: 'Test need 1'},
        {doHave: false, needDescription: 'Test need 2'},
      ],
      childrenGoalsIds: [],
    },
    actionsDescription: [
      {
        isDone: false,
        actionDescription: 'Test action 1',
      },
      {
        isDone: true,
        actionDescription: 'Test action 2',
      },
    ],
  },
  4: {
    id: 4,
    goalName: 'Some wish 4',
    isDone: false,
    parentGoalId: '',
    logo: 'cat_4.png',
    date: '2020-11-15T00:00:00',
    color: 'khaki',
    whatDescription:
      'Test what test what test what test what test what test what test what',
    whyDescription:
      'Test why test why test why test why test why test why test why test why',
    needsDescription: {
      simpleNeeds: [
        {doHave: true, needDescription: 'Test need 1'},
        {doHave: false, needDescription: 'Test need 2'},
      ],
      childrenGoalsIds: [],
    },
    actionsDescription: [
      {
        isDone: false,
        actionDescription: 'Test action 1',
      },
      {
        isDone: true,
        actionDescription: 'Test action 2',
      },
    ],
  },
};

export default goalsTemp;
