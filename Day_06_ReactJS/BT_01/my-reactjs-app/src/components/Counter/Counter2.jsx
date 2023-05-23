import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Counter2 = ({className, name}) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('UseEffect');
    // Gọi API
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, [loading, count]);

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };
  console.log('Re-render');
  return (
    <div>
      {loading ? (
        <div>Loadingggggg 2222222</div>
      ) : (
        <>
          <Wrapper className={className} count={count}>
            <Title>
              Hello {name}
              <span> !!! </span>
            </Title>
            <button className="count-btn" onClick={() => onDecrease()}>
              -
            </button>
            <span className="count">{count}</span>
            <button className="count-btn" onClick={() => onIncrease()}>
              +
            </button>

            {/*  */}
            <StyleTitle>
              Hello {name}
              <span> !!! </span>
            </StyleTitle>
            <button className="count-btn" onClick={() => onDecrease()}>
              -
            </button>
            <span className="count">{count}</span>
            <button className="count-btn" onClick={() => onIncrease()}>
              +
            </button>
          </Wrapper>
        </>
      )}
    </div>
  );
};

export {Counter2};

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  .count {
    color: ${(props) => (props.count < 5 ? 'pink' : 'blue')};
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  color: pink;
  span {
    color: blue;
  }
`;

// Ghi đè css
const StyleTitle = styled(Title)`
  color: #bf4f74;
`;
