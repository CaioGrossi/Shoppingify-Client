import { rest } from 'msw';

type ItemCreateBody = {
  itemName: string;
};

export const handlers = [
  rest.post('http://localhost:3333/shopping-list/create', (req, res, ctx) => {
    const token = req.headers.get('Authorization');

    if (token == 'Bearer invalid token') {
      return res(
        ctx.status(401),
        ctx.json({
          statusCode: 401,
          message: 'Unauthorized'
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        status: 'created'
      })
    );
  }),
  rest.post<ItemCreateBody>(
    'http://localhost:3333/item/create',
    (req, res, ctx) => {
      const { itemName } = req.body;

      if (itemName == 'already exists') {
        return res(
          ctx.status(400),
          ctx.json({
            statusCode: 400,
            message: 'Bad Request'
          })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          message: 'created'
        })
      );
    }
  ),
  rest.get('http://localhost:3333/category/index', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'fruits'
        },
        {
          id: '2',
          name: 'milks'
        },
        {
          id: '3',
          name: 'meats'
        }
      ])
    );
  })
];
