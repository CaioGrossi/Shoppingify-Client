import { render, screen } from '@testing-library/react';

import { Wrapper, FormError } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Wrapper>
        <FormError>error</FormError>
      </Wrapper>
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-bdfBwQ {
        margin-bottom: 0.5rem;
      }

      .c0 form {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .c0 h1 {
        font-size: 2.4rem;
      }

      .c1 {
        text-align: center;
        color: red;
        font-size: 1.6rem;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              error
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
