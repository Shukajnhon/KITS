import React, {useEffect, useState} from 'react';

const Counter2 = ({name}) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('UseEffect');
    // Gọi API
    setTimeout(() => {
      setLoading(false);
    }, 4000);
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
          <h1>Hello {name}</h1>
          <button className="count-btn" onClick={() => onDecrease()}>
            -
          </button>
          <span className="count">{count}</span>
          <button className="count-btn" onClick={() => onIncrease()}>
            +
          </button>
        </>
      )}
    </div>
  );
};

export {Counter2};
