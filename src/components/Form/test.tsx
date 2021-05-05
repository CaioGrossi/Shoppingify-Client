import { render } from '@testing-library/react';

import { Wrapper, SubmitButton } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Wrapper>
        <SubmitButton></SubmitButton>
      </Wrapper>
    );

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
        background-color: #f9a109;
        border-radius: 9px;
        color: white;
        padding: 1rem 2rem;
        font-size: 2rem;
        border: none;
        font-weight: bold;
        width: 100%;
        cursor: pointer;
        margin-top: 1rem;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <button
              class="c1"
            />
          </div>
        </div>
      </body>
    `);
  });
});
