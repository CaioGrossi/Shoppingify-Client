const cartItemMock = [
  {
    category: 'Derivados vaca',
    items: [
      {
        name: 'Leite',
        id: '3989da9d0667'
      },

      {
        name: 'Leite',
        id: '398da9d0'
      },

      {
        name: 'Leite',
        id: '3989da9d0'
      }
    ]
  },

  {
    category: 'Limpeza',
    items: [
      {
        name: 'Limpador',
        id: '308fsj40'
      },
      {
        name: 'Limpador',
        id: '308sjf40'
      },
      {
        name: 'Limpador',
        id: '308vsj40'
      }
    ]
  }
];

const checkListMock = [
  {
    category: 'Derivados vaca',
    items: [
      {
        name: 'Leite',
        id: '3989da9d0667',
        checked: false,
        quantity: 1,
        onCheck: () => null
      },

      {
        name: 'Leite',
        id: '398da9d0',
        checked: false,
        quantity: 1,
        onCheck: () => null
      },

      {
        name: 'Leite',
        id: '3989da9d0',
        checked: false,
        quantity: 1,
        onCheck: () => null
      }
    ]
  },

  {
    category: 'Limpeza',
    items: [
      {
        name: 'Limpador',
        id: '308fsj40',
        checked: false,
        quantity: 1,
        onCheck: () => null
      },
      {
        name: 'Limpador',
        id: '308sjf40',
        checked: false,
        quantity: 1,
        onCheck: () => null
      },
      {
        name: 'Limpador',
        id: '308vsj40',
        checked: false,
        quantity: 1,
        onCheck: () => null
      }
    ]
  }
];

export { cartItemMock, checkListMock };
